import React from 'react'
import FeedModal from './FeedModal'
import FeedPhotos from './FeedPhotos'
import propTypes from 'prop-types'

const Feed = ({user}) => {
    const [modalPhoto, setModalPhoto] = React.useState(null);
    const [pages, setPages] = React.useState([1, 2, 3]);
    const [infinity, setInfinity] = React.useState(true);
    

    React.useEffect(() => {
        let wait = false;

        function infiniteScroll(event){
            if(infinity){
                const scroll = window.scrollY;
                const height = document.body.offsetHeight - window.innerHeight;
                if(scroll > height * .75 && !wait){
                    setPages((pages) => [...pages, pages.length+1])
                    wait = true;
                    setTimeout(() => {
                        wait = false
                    }, 500);
                }
            }
        }


        window.addEventListener('wheel', infiniteScroll);
        window.addEventListener('scroll', infiniteScroll);
        return () => {
            window.removeEventListener('wheel', infiniteScroll);
            window.removeEventListener('scroll', infiniteScroll);
        }
    }, [infinity])

    return (
        <div>
            {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto}/>}
            {pages.map( page => <FeedPhotos setInfinity={setInfinity} key={page} user={user} page={page} setModalPhoto={setModalPhoto}/>)}
            
        </div>
    )
};

Feed.defaultProps = {
    user: 0,
}

Feed.propTypes = {
    user: propTypes.oneOfType([propTypes.string.isRequired, propTypes.number.isRequired])
}

export default Feed;
