import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import star from '../assets/star.png';
import Details from './Details';
import loading from '../assets/loading.png'
import '../index.css'


function Books() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);
  const[load, setLoad] = useState(true)

  useEffect(() => {
    axios
      .get('https://reactnd-books-api.udacity.com/books', {
        headers: {
          Authorization: 'whatever-you-want',
        },
      })
      .then((response) => {
        const booksData = response.data.books;
        setData(booksData);
        setLoad(false)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoad(true)
      });
  }, []);

  const filteredData = data.filter((book) =>
    book.title.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  const openBookDetails = (book) => {
    setSelectedBook(book);
  };

  const closeBookDetails = () => {
    setSelectedBook(null);
  };

  return (
    <div className='body'>
      <nav className='h-14 justify-between bg-gray-100 py-10 items-center flex'>
        <img
          className='w-48 px-7'
          src='https://kalvium.com/wp-content/uploads/2023/04/Kalvium-Logo-SVG.svg'
          alt='Logo'
        />
        <div className='flex relative'>
          <input
            type='text'
            placeholder='Search Books'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='px-12 w-96 shadow-lg rounded border outline-none h-12 text-xl'
          />
          <img
            className=' absolute top-3.5 ml-4 cursor-pointer w-5 h-6'
            src='https://cdn4.iconfinder.com/data/icons/simplegrey/search.png'
            alt=''
          />
        </div>
        <div className='flex items-center'>
          <Link to='/forms'>
            <button className='border-2 border-black px-10 py-1 text-red-400 font-semibold'>
              Register
            </button>
          </Link>
          <img
            className='h-5 w-5 ml-7 mr-2'
            src='https://icones.pro/wp-content/uploads/2021/05/icone-point-d-interrogation-question-gris.png'
            alt=''
          />
        </div>
      </nav>

      {load && <img className='loader' src={loading} alt='loading'/>}

      {selectedBook ? (
        <Details selectedBook={selectedBook} onBack={closeBookDetails} />
      ) : (
        <div className='flex justify-center flex-wrap gap-3.5 mb-10 mt-6'>
          {filteredData.map((book) => (
            <div
              key={book.id}
              className='bg-white cursor-pointer shadow-2xl hover:shadow-xl text-center rounded px-5 py-5 w-60 h-45 hover:bg-gray-100'
              onClick={() => openBookDetails(book)}
            >
              <div className='h-40 flex justify-center items-center mb-4'>
                <img
                  src={book.imageLinks.thumbnail}
                  alt={book.title}
                  className=' mt-20 h-60 w-40 rounded-md'
                />
              </div>
              <div className='flex flex-col justify-center items-center'>
                <p className='text-lg font-medium text-gray-800 mt-20 mb-2'>
                  {book.title}
                </p>
                <p className='text-sm text-gray-500 '>{book.authors.join(', ')}</p>
                <div className='flex justify-center items-center text-center text-gray-500'>
                  <div>{book.averageRating || '-'}</div>
                  <img className='w-4 h-4 ml-1' src={star} alt='' />
                  <div className='text-sm ml-3'>Free</div>
                </div>
                <div className='text-center justify-center items-center flex'>
                  <div className='bg-blue-100 rounded px-8 py-1 items-center mt-10 flex item-center justify-center font-semibold text-gray-700'>
                    Explore Further
                    <img className='w-8 items-center justify-center absolute ml-36' src="https://static.vecteezy.com/system/resources/previews/009/589/247/non_2x/magnifying-icon-magnifying-clipart-transparent-free-png.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Books;
