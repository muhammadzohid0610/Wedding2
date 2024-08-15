import React, { useState } from 'react';
import './gallery.css'
import Modal from "../modal/modal";

function Gallery() {
    const [isModalOpen, setIsModalOpen] = useState(false); 

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    
    return (
        <div>
            <div className="burger">
                    <img src="/svg/burger2.svg" alt=""  onClick={toggleModal} />
                </div>
         	<section class="description">
			<div>
				<h1>Baktybek & Adinay</h1>

				<span>Gallery</span>
			</div>
			<p>Our team strives to capture the beauty, joy and romance
				of your special day. With a keen eye for detail and a
				passion for storytelling, her team of expert photographers
				creates breathtaking images that will last a lifetime.</p>
		</section>
            <Modal isOpen={isModalOpen} onClose={toggleModal} />

        </div >
    );
}

export default Gallery;
