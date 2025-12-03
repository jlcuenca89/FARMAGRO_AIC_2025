document.addEventListener('DOMContentLoaded', () => {
    // Existing Modal Logic
    const modalContainer = document.getElementById('modal-container');
    const openModalBtn = document.getElementById('open-modal-btn');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const externalCloseBtn = document.getElementById('external-close-btn');
    const modalContent = document.querySelector('.modal-content');
    const modalHeader = document.getElementById('modal-header');

    const openModal = () => {
        if (modalContainer) {
            modalContainer.style.display = 'block';
            // Center the modal on opening
            const modalRect = modalContent.getBoundingClientRect();
            modalContent.style.left = `${(window.innerWidth - modalRect.width) / 2}px`;
            modalContent.style.top = `${(window.innerHeight - modalRect.height) / 2}px`;
        }
    };

    const closeModal = () => {
        if (modalContainer) {
            modalContainer.style.display = 'none';
        }
    };

    if (openModalBtn) {
        openModalBtn.addEventListener('click', openModal);
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    if (externalCloseBtn) {
        externalCloseBtn.addEventListener('click', closeModal);
    }

    // Draggable modal logic
    let isDragging = false;
    let offset = { x: 0, y: 0 };

    if (modalHeader && modalContent) {
        modalHeader.addEventListener('mousedown', (e) => {
            isDragging = true;
            offset.x = e.clientX - modalContent.offsetLeft;
            offset.y = e.clientY - modalContent.offsetTop;
            modalHeader.style.cursor = 'grabbing';
            // Prevent text selection while dragging
            document.body.style.userSelect = 'none';
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            
            const newX = e.clientX - offset.x;
            const newY = e.clientY - offset.y;
            
            modalContent.style.left = `${newX}px`;
            modalContent.style.top = `${newY}px`;
        });

        document.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                modalHeader.style.cursor = 'move';
                document.body.style.userSelect = '';
            }
        });
    }

    // New Video Modal Logic
    const videoModalContainer = document.getElementById('video-modal-container');
    const openVideoModalBtn = document.getElementById('open-video-modal-btn');
    const closeVideoModalBtn = document.getElementById('close-video-modal-btn');
    const videoPlaceholder = document.getElementById('video-placeholder-img');
    const video = document.getElementById('modal-video');
    const videoControls = document.getElementById('video-controls');
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const playBtn = document.getElementById('play-btn');
    const pauseBtn = document.getElementById('pause-btn');

    const openVideoModal = () => {
        if (videoModalContainer) {
            videoModalContainer.style.display = 'flex';
        }
    };

    const closeVideoModal = () => {
        if (videoModalContainer) {
            videoModalContainer.style.display = 'none';
            video.pause();
            video.currentTime = 0;
            // Reset to initial state
            video.style.display = 'none';
            videoControls.style.display = 'none';
            videoPlaceholder.style.display = 'block';
        }
    };

    if (openVideoModalBtn) {
        openVideoModalBtn.addEventListener('click', openVideoModal);
    }

    if (closeVideoModalBtn) {
        closeVideoModalBtn.addEventListener('click', closeVideoModal);
    }

    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', () => {
            videoPlaceholder.style.display = 'none';
            video.style.display = 'block';
            video.play();
        });
    }

    if (fullscreenBtn && video) {
        fullscreenBtn.addEventListener('click', () => {
            if (document.fullscreenElement) {
                if (document.exitFullscreen) document.exitFullscreen();
            } else {
                if (video.requestFullscreen) video.requestFullscreen();
            }
        });
    }

    if (playBtn && video) {
        playBtn.addEventListener('click', () => {
            video.play();
            if (videoControls) videoControls.style.display = 'flex';
        });
    }

    if (pauseBtn && video) {
        pauseBtn.addEventListener('click', () => {
            video.pause();
            if (videoControls) videoControls.style.display = 'flex';
        });
    }

    if(video) {
        video.addEventListener('play', () => {
            if (videoControls) videoControls.style.display = 'flex';
        });
        video.addEventListener('pause', () => {
            if (videoControls) videoControls.style.display = 'flex';
        });
        video.addEventListener('ended', () => {
            if (videoControls) videoControls.style.display = 'none';
        });
    }

    window.addEventListener('resize', () => {
        if (modalContainer && modalContainer.style.display === 'block') {
            const rect = modalContent.getBoundingClientRect();
            modalContent.style.left = `${(window.innerWidth - rect.width) / 2}px`;
            modalContent.style.top = `${(window.innerHeight - rect.height) / 2}px`;
        }
    });
});