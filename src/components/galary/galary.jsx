// GalleryPage.js
import React from 'react';
import Photo from '../photo/photo'
import Galary from '../gallery/Gallery'
import Footer from '../footer2/footer2'
function GalleryPage() {
    return (
        <div>
           <Galary/>

           <Photo/>
           <Footer/>
        </div>
    );
}

export default GalleryPage;