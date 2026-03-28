import { useState, useEffect } from 'react';
import { CgClose } from 'react-icons/cg';


export default function VideoModal({ isOpen, onClose, videoId = "jnMbrOF0dXM" }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="absolute inset-0" onClick={onClose} />

            <div className="relative w-full max-w-4xl mx-4 bg-black rounded-2xl overflow-hidden shadow-2xl aspect-video">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                    {/* <X className="w-5 h-5" /> */}
                    <CgClose className="w-5 h-5" />
                </button>

                <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    title="Video Player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />

            </div>
        </div>
    );
}
