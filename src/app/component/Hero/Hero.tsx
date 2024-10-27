import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
  
 <div className=' min-h-screen w-{100%} bg-gradient-to-r from-purple-500 to-pink-500'>
<Image className='justify-center items-center center-0 top-0 z-10 lg:w-[300px] xl:w-[320px] h-auto my-4 mx-4'

src="/cosmetics-products.jpg"
width={50} height={220}
alt="hero bg"/>

<section className='hero'>
  <h1 className='flex item-center text-5xl'>Beauty and Fragrance World</h1>
  <br />
  <div className='flex'>
    <p className=' font-black text-1xl items-center'> 

  Beauty cosmetics enhance and accentuate natural features,
  offering a wide range of products from makeup to skincare.
  They include foundations, lipsticks, eyeshadows, and moisturizers,
   catering to diverse skin tones and types. Beyond aesthetics,
   many cosmetics now focus on skin health, incorporating nourishing ingredients. 
  The beauty industry continually evolves, embracing sustainability and inclusivity,
   making it an essential part of many people's daily routines.
   </p>

  </div>

  <h1 className=' text-center text-4xl font-style:italic; hover:text-red-800'>About Us</h1>
<br />
<p className=' font-black text-1xl justify-center items-center'>
At Beauty and Fragrance World, we are passionate about celebrating the art of beauty and scent.
 Our mission is to provide a curated selection of high-quality cosmetics, skincare,
and fragrances that empower individuals to express their unique selves.
 With a commitment to excellence and customer satisfaction,
 we strive to inspire confidence and elegance in every product we offer.
Join us on this sensory journey and discover the perfect blend of 
beauty and fragrance tailored just for you!

</p>
<h1 className='text-center text-4xl hover:text-red-800'>Contact us</h1>
<br />
<p className='font-black text-1xl items-center'>
We' d love to hear from you! For inquiries, feedback, or assistance, please reach out to us at:
<br />
Email: info@beautyandfragranceworld.com
<br />
Phone: (123) 456-7890
<br />
Address: 123 Beauty Lane, Fragrance City, State, ZIP
<br />
"You can also connect with us on social media for the latest updates and promotions":
<br />
Instagram: @beautyandfragranceworld
<br />
Facebook: /beautyandfragranceworld
<br />
Twitter: @beautyandfragrance
<br />
Our team is here to help you on your journey to beauty and fragrance bliss!
</p>
</section>
<br />

<h1 className='font-black text 2xl'>For Further details</h1>
<br />
<button className='p-2 bg-green-800 m-1 border-yellow>-500 border-4 rounded-md'>Click Me!</button>

  </div>  
  )
}

export default Hero
