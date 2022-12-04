import React from 'react'

const Categories = () => {
        const data = [
            {
                cateImg:"./category/images/Fashion.png",
                 cateName: "Fashion",
            },
            {
                cateImg:"./category/images/Electronics.png",
                 cateName: "Electronic",
            },
            {
                cateImg:"./category/images/Cars.png",
                 cateName: "Cars",
            },
            {
                cateImg:"./category/images/house.png",
                 cateName: "Home & Garden",
            },
            {
                cateImg:"./category/images/gift-box.png",
                 cateName: "Gifts",
            },
            {
                cateImg:"./category/images/music-note.png",
                 cateName: "Music",
            },
            {
                cateImg:"./category/images/Health.png",
                 cateName: "Health & Beauty",
            },
            {
                cateImg:"./category/images/Pets.png",
                 cateName: "Pets",
            },
            {
                cateImg:"./category/images/Baby Toys.png",
                 cateName: "Baby Toys",
            },
            {
                cateImg:"./category/images/Groceries.png",
                 cateName: "Groceries",
            },
            {
                cateImg:"./category/images/Books.png",
                 cateName: "Books",
            },
        ]     
        return (
        <>
        <div className="category">
               {data.map((value,index) =>{
                return(
                    <div className="box f_flex" key={index}>
                        <img src={value.cateImg} alt="" />
                        <span>{value.cateName}</span>
                    </div>
                     )
               })}
        </div>
        </>
  )
}

export default Categories