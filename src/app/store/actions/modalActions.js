import { MODAL_OPEN, MODAL_CLOSE } from "./types";


export const openModal = (modalType, modalProps) => {
    return {
        type: MODAL_OPEN,
        payload: {
            modalType,
            modalProps
        }
    }
}


export const closemodal = () => {
    return {
        type: MODAL_CLOSE
        
    }
}