import { IconSource, IconLibrary, IconSources } from './types'

export const Library: IconLibrary = {
  defaults: {
    width: 512,
    height: 512,
    type: 'line',
  },
  icons: {
    alpha:'M102,448L256,64L410,448 M152,333L360,333',
    angle:'M448,336L256,144L64,336',
    angles:'M448,448L256,256L64,448M448,256L256,64L64,256',
    arrow:'M96,224L256,64L416,224M256,86L256,448',
    arrows: 'M160,128L256,32L352,128M352,384L256,480L160,384M256,48L256,464',
    arrowhead: 'M176,112L256,32L336,112M256,48L256,192',
    asterisk:'M76,152L436,360M76,360L436,152M256,48L256,464',
    at:'M256,160C309,160 352,203 352,256C352,309 309,352 256,352C203,352 160,309 160,256C160,203 203,160 256,160M256,480C132,480 32,380 32,256C32,132 132,32 256,32C380,32 480,132 480,256L480,288C480,323 451,352 416,352C381,352 352,323 352,288L352,176',
    ban:'M100,412L412,100 M256,32C380,32 480,132 480,255C480,379 380,480 256,480C132,480 32,379 32,255C32,132 132,32 256,32Z',
    bars:'M64,96L448,96M64,256L448,256M64,416L448,416',
    card:'rect:32 96 448 320 32 32',
    caret:'M448,336L256,144L64,336L448,336Z',
    check:'M48,248L192,392L464,120',
    circle:'circle:256 256 224',
    clipboard:'M192,80L80,80L80,496L432,496L432,80L320,80L320,112L192,112L192,80ZM256,16C282,16 304,38 304,64C304,90 282,112 256,112C230,112 208,90 208,64C208,38 230,16 256,16Z',
    clone:'M304,416L304,444C304,468 284,488 260,488L68,488C44,488 24,468 24,444L24,252C24,228 44,208 68,208L96,208M480,75L480,277C480,301 461,320 437,320L235,320C211,320 192,301 192,277L192,75C192,51 211,32 235,32L437,32C461,32 480,51 480,75Z',
    cloud:'M480,293C480,234 437,177 362,196C346,161 319,116 240,120C180,124 139,165 125,224C121,223 116,223 111,223C68,223 32,260 32,307C32,354 68,392 111,392C120,392 366,392 380,392C462,392 480,335 480,293Z',
    cog:'M306,21L206,21L187,91L147,114L78,95L28,182L78,233L78,279L28,330L78,417L147,398L187,421L206,491L306,491L325,421L365,398L434,417L484,330L434,279L434,233L484,182L434,95L365,114L325,91L306,21Z M256,176C300,176 336,212 336,256C336,300 300,336 256,336C212,336 176,300 176,256C176,212 212,176 256,176Z',
    columns: [
      'rect:32 32 448 448 45 45',
      'line:180,32 180,480',
      'line:332,32 332,480'
    ],
    comment:'M256,64C371,64 464,139 464,232C464,325 371,400 256,400C236,400 217,398 199,394C184,390 163,448 80,464C111,426 118,358 110,352C72,321 48,279 48,232C48,139 141,64 256,64Z',
    crop: 'M32,80L288,80 M80,32L80,288M432,480L432,224M480,432L224,432M80,428L432,80',
    cross:'M112,112L400,400M400,112L112,400',
    crosshairs: [
      'circle:256 256 192',
      'M256,16L256,112 M496,256L400,256 M16,256L112,256 M256,496L256,400'
    ],
    diamond: 'M256,32L480,256L256,480L32,256L256,32',
    download: 'M256,64L256,320L352,224M256,320L160,224M384,320L425,320C438,320 448,330 448,342L448,426C448,438 438,448 425,448L86,448C74,448 64,438 64,426L64,342C64,330 74,320 86,320L128,320',
    drag:'M96,128L256,32L416,128M96,384L256,480L416,384M144,256L368,256',
    envelope: [
      'rect:32 96 448 320 32 32',
      'M32,144C32,144 158.906,243.712 221.676,293.031C241.821,308.86 270.179,308.86 290.324,293.031C353.094,243.712 480,144 480,144',
    ],
    equals:'M96,320L416,320 M96,192L416,192',
    exclamation:'M256,96L256,310M254,416L258,416',
    eye:[
      'M21,256C131,42 381,43 493,256 M21,256C130,470 383,469 493,256',
      'circle:256 256 80',
    ],
    eyeshut: 'M21,256C131,42 381,43 493,256M21,256C130,320 383,320 493,256M21,256C130,470 383,469 493,256',
    filter:'M64,32L448,32L448,128L320,256L320,432L192,480L192,256L64,128L64,32Z',
    folder:'M480,128L480,448L32,448L32,64L176,64L240,128L480,128Z',
    globe: [
      'circle:256 256 224',
      'ellipse:256 256 116 224',
      'M32,255.997L480,256.115M53.867,160L458.413,160M53.867,352.587L458.413,352M256.14,32L256.14,480'
    ],
    heart:'M256,128C298,48 382,48 424,88C466,128 466,208 424,288C394,348 319,408 256,448C193,408 118,348 88,288C46,208 46,128 88,88C130,48 214,48 256,128Z',
    hourglass:'M80,32L432,32M80,480L432,480M128,32C128,256 384,256 384,480M384,32C384,256 128,256 128,480',
    image: [
      'rect:32 80 448 366 32',
      'M32,304L128,240L384,432M272,345L367,281L480,366',
      'circle:288 192 16',
    ],
    info:'M212,202L256,202L256,416M182,416L330,416M252,96L256,96',
    key:[
      'M189,246C183,229 180,212 180,194C180,118 242,56 318,56C394,56 456,118 456,194C456,270 394,332 318,332C300,332 283,329 266,323L232,360L184,360L184,408L136,408L136,456L56,456L56,379L189,246Z',
      'circle:344 168 8'
    ],
    list:'M176,96L448,96M176,256L448,256M176,416L448,416M64,96L80,96M64,256L80,256M64,416L80,416',
    locked:[
      'M144,224L144,166C144,105 195,54 256,54C317,54 368,105 368,166L368,224M256,320L256,368',
      'rect:80 224 352 240 32 32'
    ],
    login:'M192,128L320,256L192,384M304,256L64,256M320,64L448,64L448,448L320,448',
    logout:'M320,128L448,256L320,384M432,256L192,256M192,448L64,448L64,64L192,64',
    minus:'M96,256L416,256',
    mobile:[
      'rect:128 48 256 416 32 32',
      'M128,120L384,120M128,392L384,392'
    ],
    move: 'M192,96L256,32L320,96M416,192L480,256L416,320M320,416L256,480L192,416M96,192L32,256L96,320M48,256L464,256M256,48L256,464',
    number:'M256,448L256,64L176,128 M160,448L336,449',
    page:'M416,170L416,480L96,480L96,32L288,32L416,170M288,32L288,176L416,176',
    pen:'M482,143C491,134 491,120 482,112L401,30C392,21 378,21 369,30L72,326L22,489L186,439L482,143M305,93L418,206',
    phone:'M51,59C40,62 32,72 32,84C41,321 192,472 428,480C440,480 451,471 453,459C459,435 469,395 475,371C478,360 472,348 462,343C438,331 395,309 370,297C360,292 347,295 339,304C325,323 303,352 304,352C255,352 160,257 160,208C160,207 188,186 207,172C217,165 220,152 215,141C202,117 181,74 169,50C164,39 152,34 141,37C116,43 75,53 51,59Z',
    plus:'M256,96L256,416M96,256L416,256',
    point:'M448,224L256,16L64,224L160,224L160,480L352,480L352,224L448,224Z',
    prime:'M256,128L256,256',
    question:'M160,160C160,126 197,80 255,80C314,80 336,128 336,160C336,236 255,235 255,320 M255,416L256,416',
    rotate:'M392,120C356,84 307,64 256,64C150,64 64,150 64,256C64,362 150,448 256,448C303,448 349,430 384,399C349,430 303,448 256,448C150,448 64,362 64,256C64,150 150,64 256,64C307,64 356,84 392,120Z M352,208L480,208L480,80',
    search:'M204,32C300,32 384,111 384,208C384,305 305,384 208,384C111,384 32,305 32,208C32,111 107,32 204,32M480,480L332,332',
    slash:'M64,448L448,64',
    square:'rect:32 32 448 448',
    square10:'rect:32 32 448 448 45 45',
    square20:'rect:32 32 448 448 90 90',
    square30:'rect:32 32 448 448 135 135',
    square40:'rect:32 32 448 448 180 180',
    star:'M256,32L324,183L489,202L367,313L400,476L256,394L112,476L145,313L23,202L188,183L256,32Z',
    thumb:'M149,174L32,174L32,448L149,448L149,184 M149,217C277,160 246,36 282,38C372,44 324,192 324,192L440,192C462,192 480,210 480,232C480,254 462,272 440,272L368,272M424,272C446,272 464,290 464,312C464,334 446,352 424,352L352,352M392,352C414,352 432,370 432,392C432,414 414,432 392,432L256,432C220,432 149,409 149,409',
    time:'M256,128L256,256L336,336',
    trash:'M32,80L480,80 M80,80C80,80 100,344 109,452C111,477 131,496 156,496C211,496 301,496 356,496C381,496 401,477 403,452C412,344 432,80 432,80 M160,80L208,16L304,16L352,74',
    triangle:'M256,64L32,448L480,448L256,64Z',
    unlocked:[
      'M144,224L144,166C144,105 195,54 256,54C304,54 346,85 361,128M256,320L256,368',
      'rect:80 224 352 240 32 32'
    ],
    upload: 'M256,320L256,64L160,160M256,64L352,160M384,320L425,320C438,320 448,330 448,342L448,426C448,438 438,448 425,448L86,448C74,448 64,438 64,426L64,342C64,330 74,320 86,320L128,320',
    user:[
      'M448,400C448,349 410,308 364,308L149,308C102,308 64,349 64,400C64,424 64,480 64,480L448,480C448,480 448,423 448,400Z',
      'circle:256,144,96'
    ],
    vertical:'line:256,48 256,464',
    wrench:'M486,108C493,124 496,142 496,160C496,239 431,304 352,304C330,304 309,299 290,290L98,482C79,501 49,501 30,482C11,463 11,433 30,414L222,222C213,203 208,182 208,160C208,81 273,16 352,16C370,16 388,19 404,26L336,96L352,160L416,176L486,108Z',
  }
}

/**
 * Add a named icon to the icon library.
 *
 * @example
 * addIcon(
 *   'vertical-line',
 *   'line: 256,48 256,464'
 * )
 */

export function addIcon(
  name: string,
  data: IconSource,
  library=Library
): void {
  library.icons[name] = data
}

/**
 * Add multiple named icons to the icon library.
 *
 * @example
 * addIcons({
 *   'vertical-line': 'line: 256,48 256,464',
 *   'minus-size': 'M96,256L416,256',
 * })
 */

export function addIcons(
  icons: IconSources,
  library=Library
): void {
  Object.entries(icons).forEach(
    ([name, data]) => addIcon(name, data, library)
  )
}

export default Library