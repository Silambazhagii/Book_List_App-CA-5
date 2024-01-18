import React from 'react';
import star from '../assets/star.png';


function Details({ selectedBook, onBack, dark }) {

const bgStyl= dark? {background: 'rgb(170, 168, 168)'}:{};

    console.log(selectedBook)
    return (
        <div className=' mt-2 '>
            <button onClick={onBack} className='text-red-500 ml-10 text-lg  font-semibold'>
                Back to Books
            </button>

            <div className={`flex mb-7 justify-center items-center`}>
                <div className=''>
                    <img
                        src={selectedBook.imageLinks.thumbnail}
                        alt={selectedBook.title}
                        className=' h-80 w-56 rounded'
                    />
                </div>
                <div className={'flex flex-col justify-center ml-10  w-2/5  shadow-lg px-5 py-5 rounded '}  style={bgStyl}>
                    <h1 className=' text-2xl font-semibold text-3xl font-medium text-gray-800  mb-2 px-7'>Category: {selectedBook.categories}, Title: {selectedBook.title}</h1>
                    <p className={` ml-3 text-lg ${dark}? text-white : text-black`}>Subtitle: {selectedBook.subtitle || '-'} </p>
                    <p className='ml-3 text-lg text-gray-700 '>Author: {selectedBook.authors.join(', ')}</p>
                    <div className='ml-3 flex items-center text-center text-gray-500'>
                        <div className=' justify-center items-center'>Rating: {selectedBook.averageRating || '-'}</div>
                        <img className='w-4 h-4 ml-1' src={star} alt='' />
                        <div className='text-sm ml-4 bg-green-500  text-white rounded px-4 py-0'>  Free</div>
                    </div>
                    <p className='text-xs'>Description:{selectedBook.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Details;
