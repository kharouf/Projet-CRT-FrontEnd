import React from 'react'
import '../scss/about.css'
import logo from '../assets/images/logo.png'


const About = () => {
  return (
    
      <section className='about' id="about">
        <h2>من نحن</h2>
        <div className="about-container">
          
        <div className="title-about">
          <h1>الهلال الأحمر التونسي</h1>
          <p>هو جمعية خيرية إسعافية تأسست في 7 أكتوبر 1956 تسعى إلى حماية كرامة الإنسان و تخفيف معاناة المستضعفين. و تهدف جميع أنشطتها لمعاضدة مجهودات الدولة و تعمل لأجل مصلحة الوطن . و أسس بنيان الهلال الأحمر التونسي على سبعة مبادئ </p>
          <p id='p'> الإنسانية – التطوع – عدم التحيز – الحياد - الاستقلالية – الوحدة – العالمية </p>
          <button className='title-button'>تسجيل الدخول</button>
        </div>

        <div className="logo">
          <img src={logo} alt="logo" width={"350px"} />
        </div>
        </div>
      </section>
    
  )
}

export default  (About)