# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Cyan: hsl(180, 66%, 49%)
- Dark Violet: hsl(257, 27%, 26%)

### Secondary

- Red: hsl(0, 87%, 67%)

### Neutral

- Gray: hsl(0, 0%, 75%)
- Grayish Violet: hsl(257, 7%, 63%)
- Very Dark Blue: hsl(255, 11%, 22%)
- Very Dark Violet: hsl(260, 8%, 14%)

## Typography

### Body Copy

- Font size: 18px

### Fonts

- Family: [Poppins](https://fonts.google.com/specimen/Poppins)
- Weights: 500, 700

## Icons

For the social icons, you can either use the SVGs provided or a font icon library. Some suggestions for font icon libraries can be found below:

- [Font Awesome](https://fontawesome.com)
- [IcoMoon](https://icomoon.io)
- [Ionicons](https://ionicons.com)


{prevShortUrl && (
          <div className=" relative bg-white flex flex-col items-start w-full p-5 rounded-lg -mt-12 mb-14 overflow-hidden">
            <p className="pb-2 text-[hsl(255,11%,22%)] truncate w-full">{prevOriginalUrl}</p>

            {/* horizontal line */}
            <div className=" absolute inset-x-0 top-10 h-[1px] w-full bg-[hsl(0,0%,75%)]/50 my-4"></div>
            <p className="py-3 text-[hsl(180,66%,49%)]">{prevShortUrl}</p>

            <CopyToClipboard text={shortUrl}>
              <button onClick={handleCopyText} className={`${copyBtnStyle} ${ !copy ? 'bg-[hsl(180,66%,49%)]' : 'bg-[hsl(255,11%,22%)]' }`}>
                {!copy ? (
                  <span>Copy</span>
                ):(
                  <span>Copied!</span>
                )}
              </button>
            </CopyToClipboard>
          </div>
        )}