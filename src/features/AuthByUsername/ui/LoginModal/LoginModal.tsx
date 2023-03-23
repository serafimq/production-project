import { Suspense } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { Loader } from 'shared/ui/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModelProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModelProps) => (
    <Modal
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <Suspense fallback={<Loader />}>
            <LoginFormAsync />
        </Suspense>
    </Modal>
);
