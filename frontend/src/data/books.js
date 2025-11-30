/**
 * Mock Book Data for READOVA Online Bookstore
 * CSCI426: Advanced Web Programming - Phase 1
 * 
 * ACADEMIC INTEGRITY NOTICE:
 * This file contains sample book data for demonstration purposes.
 * 
 * CITATIONS:
 * - Book titles, authors, and publication information reference real published works
 *   and are used here for educational demonstration only.
 * - Book cover images are sourced from Goodreads (https://www.goodreads.com)
 *   for educational purposes only.
 * - All book information is publicly available bibliographic data.
 * 
 * ORIGINAL WORK:
 * - All JavaScript code, functions, and logic in this file are original
 * - Data structure design is original
 * - Helper functions (search, filter, etc.) are original implementations
 * 
 * This data will be replaced with API calls in Phase 2.
 */

// Import book cover images from assets
import midnightLibrary from '../assets/images/midnight-library.jpg';
import atomicHabits from '../assets/images/atomic-habits.jpg.webp';
import silentPatient from '../assets/images/silent-patient.jpg';
import educated from '../assets/images/educated.jpg';
import alchemist from '../assets/images/alchemist.jpg';
import becoming from '../assets/images/becoming.jpg';
import dune from '../assets/images/dune.jpg';
import psychologyOfMoney from '../assets/images/psychology-of-money.jpg';
import crawdadsSing from '../assets/images/crawdads-sing.jpg';
import thinkAgain from '../assets/images/think-again.jpg.webp';
import projectHailMary from '../assets/images/project-hail-mary.jpg';
import evelynHugo from '../assets/images/evelyn-hugo.jpg';

const books = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 16.99,
    category: "Fiction",
    description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices.",
    image: midnightLibrary,
    rating: 4.5,
    pages: 304,
    publisher: "Viking Press",
    year: 2020,
    isbn: "978-0525559474"
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    price: 18.99,
    category: "Self-Help",
    description: "No matter your goals, Atomic Habits offers a proven framework for improving every day. James Clear reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
    image: atomicHabits,
    rating: 4.8,
    pages: 320,
    publisher: "Avery",
    year: 2018,
    isbn: "978-0735211292"
  },
  {
    id: 3,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    price: 14.99,
    category: "Thriller",
    description: "Alicia Berenson's life is seemingly perfect. A famous painter married to an in-demand fashion photographer. One evening her husband Gabriel returns home late, and Alicia shoots him five times in the face, and then never speaks another word.",
    image: silentPatient,
    rating: 4.3,
    pages: 336,
    publisher: "Celadon Books",
    year: 2019,
    isbn: "978-1250301697"
  },
  {
    id: 4,
    title: "Educated",
    author: "Tara Westover",
    price: 15.99,
    category: "Memoir",
    description: "Born to survivalists in the mountains of Idaho, Tara Westover was seventeen the first time she set foot in a classroom. This is an unforgettable memoir about a young girl who leaves her survivalist family and goes on to earn a PhD from Cambridge University.",
    image: educated,
    rating: 4.7,
    pages: 352,
    publisher: "Random House",
    year: 2018,
    isbn: "978-0399590504"
  },
  {
    id: 5,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 12.99,
    category: "Fiction",
    description: "Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. His quest will lead him to riches far different and far more satisfying than he ever imagined.",
    image: alchemist,
    rating: 4.6,
    pages: 208,
    publisher: "HarperOne",
    year: 1988,
    isbn: "978-0062315007"
  },
  {
    id: 6,
    title: "Becoming",
    author: "Michelle Obama",
    price: 19.99,
    category: "Memoir",
    description: "In her memoir, Michelle Obama invites readers into her world, chronicling the experiences that have shaped her from her childhood on the South Side of Chicago to her years as an executive to her time spent at the world's most famous address.",
    image: becoming,
    rating: 4.9,
    pages: 448,
    publisher: "Crown Publishing",
    year: 2018,
    isbn: "978-1524763138"
  },
  {
    id: 7,
    title: "Dune",
    author: "Frank Herbert",
    price: 17.99,
    category: "Science Fiction",
    description: "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the spice melange.",
    image: dune,
    rating: 4.4,
    pages: 688,
    publisher: "Ace Books",
    year: 1965,
    isbn: "978-0441172719"
  },
  {
    id: 8,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    price: 16.49,
    category: "Self-Help",
    description: "Timeless lessons on wealth, greed, and happiness. Doing well with money is not necessarily about what you know. It is about how you behave. And behavior is hard to teach, even to really smart people.",
    image: psychologyOfMoney,
    rating: 4.7,
    pages: 256,
    publisher: "Harriman House",
    year: 2020,
    isbn: "978-0857197689"
  },
  {
    id: 9,
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    price: 15.49,
    category: "Fiction",
    description: "For years, rumors of the Marsh Girl have haunted Barkley Cove. So in late 1969, when handsome Chase Andrews is found dead, the locals immediately suspect Kya Clark, the so-called Marsh Girl.",
    image: crawdadsSing,
    rating: 4.5,
    pages: 384,
    publisher: "G.P. Putnam's Sons",
    year: 2018,
    isbn: "978-0735219090"
  },
  {
    id: 10,
    title: "Think Again",
    author: "Adam Grant",
    price: 17.49,
    category: "Self-Help",
    description: "Intelligence is usually seen as the ability to think and learn, but in a rapidly changing world, there is another set of cognitive skills that might matter more: the ability to rethink and unlearn.",
    image: thinkAgain,
    rating: 4.6,
    pages: 320,
    publisher: "Viking",
    year: 2021,
    isbn: "978-1984878106"
  },
  {
    id: 11,
    title: "Project Hail Mary",
    author: "Andy Weir",
    price: 18.49,
    category: "Science Fiction",
    description: "Ryland Grace is the sole survivor on a desperate, last-chance mission and if he fails, humanity and the earth itself will perish. Except that right now, he does not know that. He cannot even remember his own name.",
    image: projectHailMary,
    rating: 4.8,
    pages: 496,
    publisher: "Ballantine Books",
    year: 2021,
    isbn: "978-0593135204"
  },
  {
    id: 12,
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    price: 14.49,
    category: "Fiction",
    description: "Aging and reclusive Hollywood movie icon Evelyn Hugo is finally ready to tell the truth about her glamorous and scandalous life. A captivating tale of love, ambition, and the price of fame.",
    image: evelynHugo,
    rating: 4.5,
    pages: 400,
    publisher: "Atria Books",
    year: 2017,
    isbn: "978-1501161933"
  }
];

// Get all unique categories from books
export const categories = [...new Set(books.map(book => book.category))];

// Get featured books (first 4 books)
export const getFeaturedBooks = () => books.slice(0, 4);

// Get book by ID
export const getBookById = (id) => books.find(book => book.id === parseInt(id));

// Get books by category
export const getBooksByCategory = (category) => {
  if (!category || category === 'All') return books;
  return books.filter(book => book.category === category);
};

// Search books by title or author
export const searchBooks = (query) => {
  const searchTerm = query.toLowerCase().trim();
  if (!searchTerm) return books;
  return books.filter(
    book => 
      book.title.toLowerCase().includes(searchTerm) || 
      book.author.toLowerCase().includes(searchTerm)
  );
};

export default books;
