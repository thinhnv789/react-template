export const devices = {
    DESKTOP: 'Desktop', 
    TABLET: 'Tablet',
    MOBILE: 'Mobile'
}

export const getDevice = () => {
    let width = (window.innerWidth > 0) ? window.innerWidth : window.screen.width;
    let device = (width < 576) ? devices.MOBILE : ((width < 768) ? devices.TABLET : devices.DESKTOP)
    return device;
}