import { createContext, useState, ReactNode } from 'react';

interface Props {
    children? : ReactNode
}

export interface ModalValues {
    isModalOpen: boolean,
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export const ContextModal = createContext({
    isModalOpen: false,
    setIsModalOpen : (isModalOpen: boolean) => {}
})

export default function ModalContext({children}: Props) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    
    return <ContextModal.Provider value={{isModalOpen, setIsModalOpen}}>
        {children}
    </ContextModal.Provider>
}