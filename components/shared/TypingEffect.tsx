import React, { useState, useEffect, useMemo } from 'react';

const TypingEffect: React.FC = () => {
    const roles = useMemo(() => ['Developer', 'Designer', 'Creator'], []);
    const [roleIndex, setRoleIndex] = useState<number>(0);
    const [charIndex, setCharIndex] = useState<number>(0);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    const [text, setText] = useState<string>('');
    const typingDelay: number = 200;
    const erasingDelay: number = 100;
    const newTextDelay: number = 2000;

    useEffect(() => {
        const handleTyping = () => {
            const currentRole = roles[roleIndex];

            if (isDeleting) {
                setText(currentRole.substring(0, charIndex - 1));
                setCharIndex((prev) => prev - 1);
            } else {
                setText(currentRole.substring(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);
            }

            if (!isDeleting && charIndex === currentRole.length) {
                setTimeout(() => setIsDeleting(true), newTextDelay);
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            }
        };

        const delay = isDeleting ? erasingDelay : typingDelay;
        const timer = setTimeout(handleTyping, charIndex === 0 && isDeleting ? newTextDelay : delay);

        return () => clearTimeout(timer); // Cleanup on unmount or dependencies change
    }, [charIndex, isDeleting, roleIndex, roles]);

    return <h2 className='text-2xl md:text-3xl text-gray-300'>{text}</h2>;
};

export default TypingEffect;
