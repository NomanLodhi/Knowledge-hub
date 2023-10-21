import React from 'react'
import JavaScript from './Javascript.png'
import Python from './Python.webp'
import PHP from './PHP.png'
import Ruby from './Ruby.png'
import SQL from './SQL.png'
import C from './C.png'
import Csharp from './C sharp.png' 
export default function Middle() {
  return (
    <>
      <div className="w-50 w-sm-adjust p-2">
        <h1 className="fs-1 fw-bold py-3">Top-7 In-Demand Programming Language</h1>
        <div className=' border rounded-3 p-3 py-5'>
      
     <div className="py-3">
     <h1 className="h1 py-2" id='JavaScript'>1. JavaScript</h1>
      <p className="py-2">If you’re looking for a popular language to learn, JavaScript should probably come first. JavaScript remains one of the most-used programming languages, even  30 years after its first development. In fact, according to Web Technology Surveys, as many as 98% of all websites currently utilize a form of JavaScript-based client-side web application development.</p>
<img src={JavaScript} className='w-100' />
     </div>
     <div className="py-3">
     <h1 className="h1 py-2" id='Python'>2. Python</h1>
      <p className="py-2">Python is a versatile and widely-used programming language known for its simplicity and readability. With a clean and intuitive syntax, Python is favored by beginners and seasoned developers alike. Its extensive standard library and a vast ecosystem of third-party packages make it an ideal choice for a wide range of applications, from web development and data analysis to artificial intelligence and scientific computing. Python's dynamic typing and strong support for object-oriented, imperative, and functional programming styles make it a go-to language for various software projects, while its open-source nature promotes collaboration and community-driven innovation.</p>
<img src={Python} className='w-100' />
     </div>
     <div className="py-3">
     <h1 className="h1 py-2" id='Ruby'>3. Ruby</h1>
      <p className="py-2">Ruby is a dynamic and elegant programming language known for its simplicity and productivity. Created by Yukihiro Matsumoto in the mid-1990s, Ruby emphasizes readability and developer happiness with its clean and concise syntax. It is highly versatile, making it a popular choice for web development, scripting, and automation tasks. Ruby's object-oriented nature, extensive library support, and the vibrant Ruby on Rails framework have made it a favorite among developers for building web applications rapidly and efficiently. With a strong community and a commitment to "matz's principle" of making programmers happy, Ruby remains a language that fosters creativity and ease of use.</p>
<img src={Ruby} className='w-100' />
     </div>
     <div className="py-3">
     <h1 className="h1 py-2" id='SQL'>4. SQL</h1>
      <p className="py-2">SQL, which stands for Structured Query Language, is a powerful and standardized programming language used for managing and manipulating relational databases. SQL enables users to perform a wide range of tasks, including querying data, updating records, and defining database structures. Its simplicity and versatility make it a fundamental tool for anyone working with databases, from database administrators to software developers. SQL allows users to interact with data in a structured and organized manner, making it a cornerstone of data management and retrieval in the world of information technology..</p>
<img src={SQL} className='w-100' />
     </div>
     <div className="py-3">
     <h1 className="h1 py-2" id='PHP'>5. PHP</h1>
      <p className="py-2">PHP (Hypertext Preprocessor) is a widely-used open-source server-side scripting language designed for web development. Known for its versatility and ease of integration with HTML, PHP allows developers to create dynamic web pages, handle form data, interact with databases, and build a wide range of web applications. It's a foundational technology for many websites and web applications, offering powerful features like session management, database connectivity, and a vast library of functions and frameworks. PHP's simplicity and extensive community support make it a popular choice for both beginners and experienced developers in the realm of web development.</p>
<img src={PHP} className='w-100' />
     </div>
     <div className="py-3">
     <h1 className="h1 py-2" id='C'>6. C</h1>
      <p className="py-2">C is a powerful and versatile programming language renowned for its efficiency and portability. Developed in the early 1970s, it remains a fundamental language in the world of computer science. C's straightforward syntax and low-level capabilities make it an ideal choice for system programming, embedded systems, and developing high-performance software. Its influence can be seen in various modern programming languages, and its standard library provides essential functions for tasks like file manipulation, memory management, and I/O operations. Whether you're a seasoned developer or just starting to learn programming, C's simplicity and extensive community support make it a timeless language to master.</p>
<img src={C} className='w-100' />
     </div>
     <div className="py-3">
     <h1 className="h1 py-2" id='C++'>7. C++</h1>
      <p className="py-2">C++ is a versatile and powerful programming language that has been a mainstay in the world of software development for decades. Known for its combination of high-level features and low-level control, C++ allows developers to write efficient and performance-critical code across various domains, from system-level applications to game development. Its object-oriented nature, robust standard library, and support for generic programming make it a go-to choice for building complex and scalable software solutions. With a rich history and a dedicated community, C++ remains an essential language for those who seek to harness the full potential of computing.</p>
<img src={Csharp} className='w-100' />
     </div>
      </div>
      </div>
    </>
  )
}
