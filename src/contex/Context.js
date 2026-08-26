import {createContext} from "react";

export const contactContext = createContext({
    userData: {
        id: "",
        user_name: "",
        email: "",
        role: [],
        created_at: "",
        updated_at: ""
    },
    forceRender: false,
    setForceRender: ()=>{},
    loading: false,
    setLoading : ()=>{},
    logoPassed: true,
    setLogoPassed: () => {},
    navLinksColor: true,
    setNavLinksColor: () => {},
    stickyNavbarSize: true,
    setStickyNavbarSize: () => {},
    isMobileMenuOpen: false,
    setIsMobileMenuOpen: () => {},
    isHeaderVideoLoaded : false,
    setIsHeaderVideoLoaded: () => {},
    Active : false,
    setActive : () => {},
})