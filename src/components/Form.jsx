import { useEffect, useState } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function Form() {
  const [url, setUrl] = useState('');
  const [links, setLinks] = useState([])
  const [error, setError] = useState('');

  // Load the previous shortened URL from localStorage when the component mounts
  useEffect( () => {
    const storedLinks = JSON.parse(localStorage.getItem('links'));
    if (storedLinks) {
      setLinks(storedLinks);
    }
  }, [])

  const handleCopyText = (index) =>{
    setLinks(prevLinks => prevLinks.map((link, i) => {
      if (i === index) {
        return {...link, copied: true};
      } else {
        return link;
      }
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!url) {
      setError('Please add a link');
      return;
    }
  
    try {
      const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
  
      if (!response.ok) {
        throw new Error('Request failed.');
      }
  
      const data = await response.json();

      const newLink = {
        originalUrl: data.result.original_link,
        shortUrl: data.result.full_short_link,
        copied: false
      };
      
      setLinks(prevLinks => {
        const newLinks = [newLink, ...prevLinks];
        localStorage.setItem('links', JSON.stringify(newLinks));

        // Remove the link after 5 minutes
        setTimeout(() => {
          setLinks(prevLinks => {
            const remainingLinks = prevLinks.filter(link => link.shortUrl !== newLink.shortUrl && link.originalUrl !== newLink.originalUrl);
            localStorage.setItem('links', JSON.stringify(remainingLinks));
            return remainingLinks;
          });
        }, 5 * 60 * 1000);  // 5 minutes

        if (newLinks.length > 3) {
          newLinks.pop();
          // Update localStorage immediately after removing the link
          localStorage.setItem('links', JSON.stringify(newLinks));
        }

        return newLinks;
      });
      
      // Clear the input field
      // setUrl('');

    } catch (error) {
      setError('An error occurred while shortening the URL');
    }
  };

  const inputStyle = `mb-2 h-14 w-full rounded-lg pl-5 focus:border-none focus:ring-0 lg:mb-0`
  const copyBtnStyle = `text-white w-full rounded-lg py-3 mt-2 lg:w-40 lg:mt-0`

  return (
    <>
      <div className=" lg:max-w-6xl lg:mx-auto lg:container">
        <div className=" relative -top-20 flex flex-col justify-center items-center bg-[hsl(257,27%,26%)] rounded-lg">
          <form onSubmit={handleSubmit} className=" flex flex-col justify-between items-center bg-form-bg-mobile bg-right-top bg-no-repeat w-full p-5 rounded-lg lg:bg-form-bg-desktop lg:bg-right-bottom lg:py-10 lg:px-20 lg:flex-row lg:gap-5">
              <div className=" flex flex-col w-full lg:relative">
                <input 
                  type="text"
                  value={url}
                  onChange={e => setUrl(e.target.value)}
                  placeholder="Shorten a link here..." 
                  className={`${inputStyle} ${ error && !url.trim() && 'outline outline-4 outline-[hsl(0,87%,67%)] placeholder-[hsl(0,75%,78%)]'}`}
                />
                {error && !url.trim() && <p className=" text-sm italic text-[hsl(0,87%,67%)] pb-3 lg:absolute lg:-bottom-10">{error}</p>}
              </div>
              <button type="submit" className=" text-white bg-[hsl(180,66%,49%)] py-4 w-full rounded-lg mt-2 hover:bg-[hsl(180,61%,74%)] lg:w-1/3 lg:mt-0">Shorten It!</button>
          </form>
        </div>

        {/* display links */}

        {links.map((link, index) => (
          <div className=" relative bg-white flex flex-col items-start w-full p-5 rounded-lg -mt-12 mb-14 overflow-hidden lg:flex-row lg:items-center lg:justify-center" key={index}>
            <p className="pb-2 text-[hsl(255,11%,22%)] truncate w-full lg:w-3/4 lg:pb-0">{link.originalUrl}</p>

            {/* horizontal line */}
            <div className=" absolute inset-x-0 top-10 h-[1px] w-full bg-[hsl(0,0%,75%)]/50 my-4 lg:hidden"></div>
            <p className="py-3 text-[hsl(180,66%,49%)] lg:py-0 lg:px-5">{link.shortUrl}</p>

            <CopyToClipboard text={link.shortUrl} onCopy={() => handleCopyText(index)}>
              <button className={`${copyBtnStyle} ${ link.copied ? 'bg-[hsl(255,11%,22%)]' : 'bg-[hsl(180,66%,49%)] hover:bg-[hsl(180,66%,49%)]/50' }`}>
                {link.copied ? (<span>Copied!</span>):(<span>Copy</span>)}
              </button>
            </CopyToClipboard>
          </div>
        ))}

      </div>
    </>
  );
}
