import React from 'react';
import star from '../assets/star.png';


function Details({ selectedBook, onBack }) {
    console.log(selectedBook)
    return (
        <div className='mt-10'>
            <button onClick={onBack} className='text-red-500 ml-10 text-lg  font-semibold'>
                Back to Books
            </button>
            <div className='h-40 flex justify-center items-center mb-4'>
                <div className='mt-10'>
                    <img
                        src={selectedBook.imageLinks.thumbnail}
                        alt={selectedBook.title}
                        className=' mt-20 h-72 w-52 rounded-md'
                    />
                </div>
                <div className='flex flex-col justify-center ml-10 w-2/5 shadow-lg px-5 py-5 mt-52'>
                    <h1 className='text-2xl font-semibold text-3xl font-medium text-gray-800  mb-2 px-7'>Category: {selectedBook.categories}, Title: {selectedBook.title}</h1>
                    <p className='text-lg'>Subtitle: {selectedBook.subtitle || '-'} </p>
                    <p className='text-lg text-gray-700 '>Author: {selectedBook.authors.join(', ')}</p>
                    <div className='flex items-center text-center text-gray-500'>
                        <div className='justify-center items-center'>Rating: {selectedBook.averageRating || '-'}</div>
                        <img className='w-4 h-4 ml-1' src={star} alt='' />
                        <div className='text-sm ml-4 '>  Free</div>
                    </div>
                    <p className='text-xs'>Description:{selectedBook.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Details;
