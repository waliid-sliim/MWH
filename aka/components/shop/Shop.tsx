
import React, { useState } from 'react'
import NavBar from '../navbar/NavBar'
import axios from 'axios'
import OneProduct from '../OneProduct';
import Link  from 'next/link';
const shop =({products}) => {
const [allProducts,setAllProducts]=useState(products) 
console.log(allProducts,'all');
const [filters,setFilters]=useState([])
const [inptvalue,setInput]=useState('')
const filterByCategories:any=(cate:any)=>{

 const filtred=  allProducts.filter(e=>e.categorie==cate)
setAllProducts(filtred)
let filter=filters


setFilters([...filter,cate])
}
console.log(filters);

const filterByGender:any=(gender:any)=>{
let filter=filters


setFilters([...filter,gender])
 const filtred=  allProducts.filter(e=>e.gender==gender)
setAllProducts(filtred)
}
 const filterByBrand:any=(brand:any)=>{
let filter=filters


setFilters([...filter,brand])
 const filtred=  allProducts.filter(e=>e.brand==brand)
setAllProducts(filtred)
} 
 const filterByPrice:any=(min:any,max:any,price:any)=>{
let filter=filters


setFilters([...filter,price])
 const filtred=  allProducts.filter(e=>e.price>min && e.price<max)
setAllProducts(filtred)
} 
const filterBySize:any=(size)=>{
let filter=filters


setFilters([...filter,size])
 const filtred=  allProducts.filter(e=>e.size.includes(size))
setAllProducts(filtred)
} 
const search=(input:any)=>{
const filtred=  allProducts.filter(e=>e.name.toLowerCase().includes(input.toLowerCase()))
setAllProducts(filtred)
}
  return (
    <>
    <meta charSet="UTF-8" />
    <meta name="description" content="Male_Fashion Template" />
    <meta name="keywords" content="Male_Fashion, unica, creative, html" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    <title>Male-Fashion | Template</title>
    {/* Google Font */}
    <link
      href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800;900&display=swap"
      rel="stylesheet"
    />
    {/* Css Styles */}
    <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" />
    <link rel="stylesheet" href="css/font-awesome.min.css" type="text/css" />
    <link rel="stylesheet" href="css/elegant-icons.css" type="text/css" />
    <link rel="stylesheet" href="css/magnific-popup.css" type="text/css" />
    <link rel="stylesheet" href="css/nice-select.css" type="text/css" />
    <link rel="stylesheet" href="css/owl.carousel.min.css" type="text/css" />
    <link rel="stylesheet" href="css/slicknav.min.css" type="text/css" />
    <link rel="stylesheet" href="css/style.css" type="text/css" />
    {/* Page Preloder */}
    <div id="preloder">
      <div className="loader" />
    </div>

    {/* Breadcrumb Section Begin */}
    <section className="breadcrumb-option">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb__text">
              <h4>Shop</h4>
              <div className="breadcrumb__links">
                <a href="./index.html">Home</a>
                <span>Shop</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Breadcrumb Section End */}
    {/* Shop Section Begin */}
    <section className="shop spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="shop__sidebar">
              remove all filter <svg onClick={()=>{
                    axios.get("http://localhost:8080/product/getall").then(res=>{setAllProducts(res.data)
                  setFilters([])})
                  }} xmlns="http://www.w3.org/2000/svg" height='20px' width='20px' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
              <div className="shop__sidebar__search">
                
                  <input type="text" placeholder="Search..." onChange={e=>setInput(e.target.value)}  onKeyPress={(e) => {e.key === 'Enter' && search
                
                  (inptvalue)}
                  }/>
                
                
              </div>
              <div className="shop__sidebar__accordion">
                <div className="accordion" id="accordionExample">
                  <div className="card">
                    <div className="card-heading">
                      <a data-toggle="collapse" data-target="#collapseOne">
                        Categories
                      </a>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="shop__sidebar__categories">
                          <ul className="nice-scroll">
                            <li onClick={()=>{filterByGender('Men')}} className='btn display-1'>
                              Men 
                            </li>
                            <li onClick={()=>{filterByGender('Women')}}  className='btn display-1'>
                              Women 
                            </li>
                            <li className='btn ' onClick={()=>{filterByCategories("Premature Baby")}}>
                              Premature Baby 
                            </li>
                            <li className='btn display-1' onClick={()=>{filterByCategories("Clothes")}}>
                              Clothes 
                            </li>
                            <li className='btn display-1' onClick={()=>{filterByCategories("Shoes")}}>
                              Shoes 
                            </li>
                            <li className='btn display-1' onClick={()=>{filterByCategories("Accessories")}}>
                              Accessories 
                            </li>
                            <li className='btn display-1' onClick={()=>{filterByCategories("kids")}}>
                              Kids 
                            </li>
                          
                          </ul>
                        </div>
                  <br />
                  <br />
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-heading">
                      <a data-toggle="collapse" data-target="#collapseTwo">
                        Branding
                      </a>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse show"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="shop__sidebar__brand">
                          <ul>
                            <li onClick={()=>{filterByBrand("Louis Vuitton")}} className='btn'>
                              Louis Vuitton
                            </li>
                            <li onClick={()=>{filterByBrand("Chanel")}} className='btn'>
                              Chanel
                            </li>
                            <li onClick={()=>{filterByBrand("Hermes")}} className='btn'>
                              Hermes
                            </li>
                            <li onClick={()=>{filterByBrand("Gucci")}} className='btn'>
                              Gucci
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-heading">
                      <a data-toggle="collapse" data-target="#collapseThree">
                        Filter Price
                      </a>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse show"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="shop__sidebar__price">
                          <ul>
                            <li onClick={()=>{filterByPrice(0,50,'0.00 dt - 50.00 dt')}} className='btn'>
                              0.00 dt - 50.00 dt
                            </li>
                            <li onClick={()=>{filterByPrice(50,100,'50.00 dt - 100.00 dt')}} className='btn'>
                              50.00 dt - 100.00 dt
                            </li>
                            <li onClick={()=>{filterByPrice(100,150,'100.00 dt - 150.00 dt')}} className='btn'>
                              100.00 dt - 150.00 dt
                            </li>
                            <li onClick={()=>{filterByPrice(150,200,'150.00 dt - 200.00 dt')}} className='btn'>
                              150.00 dt - 200.00 dt
                            </li>
                            <li onClick={()=>{filterByPrice(200,250,'200.00 dt - 250.00 dt')}} className='btn'>
                              200.00 dt - 250.00 dt
                            </li>
                            <li onClick={()=>{filterByPrice(250,500000,'250.00 dt +')}} className='btn'>
                              250.00 dt +
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-heading">
                      <a data-toggle="collapse" data-target="#collapseFour">
                        Size
                      </a>
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse show"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="shop__sidebar__size">
                          <label htmlFor="xs">
                            xs
                            <input type="radio" id="xs" />
                          </label>
                          <label htmlFor="sm">
                            s
                            <input type="radio" id="sm" />
                          </label>
                          <label htmlFor="md">
                            m
                            <input type="radio" id="md" />
                          </label>
                          <label htmlFor="xl">
                            xl
                            <input type="radio" id="xl" />
                          </label>
                          <label htmlFor="2xl">
                            2xl
                            <input type="radio" id="2xl" />
                          </label>
                          <label htmlFor="xxl">
                            xxl
                            <input type="radio" id="xxl" />
                          </label>
                          <label htmlFor="3xl">
                            3xl
                            <input type="radio" id="3xl" />
                          </label>
                          <label htmlFor="4xl">
                            4xl
                            <input type="radio" id="4xl" />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-heading">
                      <a data-toggle="collapse" data-target="#collapseFive">
                        Colors
                      </a>
                    </div>
                    <div
                      id="collapseFive"
                      className="collapse show"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="shop__sidebar__color">
                          <label className="c-1" htmlFor="sp-1">
                            <input type="radio" id="sp-1" />
                          </label>
                          <label className="c-2" htmlFor="sp-2">
                            <input type="radio" id="sp-2" />
                          </label>
                          <label className="c-3" htmlFor="sp-3">
                            <input type="radio" id="sp-3" />
                          </label>
                          <label className="c-4" htmlFor="sp-4">
                            <input type="radio" id="sp-4" />
                          </label>
                          <label className="c-5" htmlFor="sp-5">
                            <input type="radio" id="sp-5" />
                          </label>
                          <label className="c-6" htmlFor="sp-6">
                            <input type="radio" id="sp-6" />
                          </label>
                          <label className="c-7" htmlFor="sp-7">
                            <input type="radio" id="sp-7" />
                          </label>
                          <label className="c-8" htmlFor="sp-8">
                            <input type="radio" id="sp-8" />
                          </label>
                          <label className="c-9" htmlFor="sp-9">
                            <input type="radio" id="sp-9" />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="shop__product__option">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  all filters
                  <br />

                  {filters.map(e=>{
                  console.log(e);
                  
                  return(e+"    " )}    )}
                </div>
              
              </div>
            </div>
            <div className="row">
             {allProducts.map((e:any)=>(
              <OneProduct key={e._id} e={e}/>
             ))}
              
              
            </div>
           
          </div>
        </div>
      </div>
    </section>
    {/* Shop Section End */}
    {/* Search Begin */}
    <div className="search-model">
      <div className="h-100 d-flex align-items-center justify-content-center">
        <div className="search-close-switch">+</div>
        <form className="search-model-form">
          <input type="text" id="search-input" placeholder="Search here....." />
        </form>
      </div>
    </div>
    {/* Search End */}
    {/* Js Plugins */}
  </>
   
  )
}

export default shop