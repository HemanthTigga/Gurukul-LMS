import React from 'react'
import { companyLogo1, companyLogo2, companyLogo3, companyLogo4 } from '../../assets'
import '../herosection/Hero.css';
// import styled, { keyframes, css } from "styled-components";
import './Companies.css';





// const Wrapper = styled.div`
//     width: 100%;
//     height: fit-content;
//     display:flex;
//     align-items:center;
//     justify-content: center;
//     flex-direction: column;
// `

// const Text = styled.div`
//     font-size: 35px;
//     font-weight: 500;
//     margin-bottom: 10px;
//     color: #02203c;
// `

// const Note = styled.div`
//     font-size: 18;
//     font-weight: 200;
//     margin-bottom: 40px;
//     color: #7c8e9a;
// `

// const Marquee = styled.div`
//     display: flex;
//     width: 1200px;
//     user-select: none;
// `

// const MarqueeGroup = styled.div`
//     display: flex;
//     flex-shrink:0;
//     align-items: center;
//     justify-content: space-around;
//     white-space:nowrap;
//     width:100%;

// `
// const ImageGroup = styled.div`
//     display: grid;
//     place-items: center;
//     width: clamp(10rem, 1rem + 40vmin, 30rem);
//     padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
// `
// const Image = styled.div`
//     object-fit: contain;
//     width: 100%;
//     height: 100%;
//     border-radius:0.5rem;
//     aspect-ratio: 16/9;
//     padding: 5px 20px;
//     box-shadow: rgba(99,99,99,0.2) 0px 2px 8px 0px;
//     z-index:999;
// `

const Companies = () => {

    const row1 = [
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
    ];
    const row2 = [
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/9dd55e54b5a28658bf4e.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/0384060dcbf73b6a707c.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/35e044b3354aaa0caed5.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/f50ae7cbf6cc805bdadc.png",
        "https://1000logos.net/wp-content/uploads/2021/10/Meta-Logo.png",
    ];



    // return (
    //     <div className='w-full bg-[#1A0F2C] py-[50px]'>
    //         <div className='md:max-w-[1280px] m-auto max-w-[600px]'>
    //             <h1 className='text-center text-2xl font-bold text-[#6b8ab9] '>
    //                 Trusted by over 25,000 teams around the world.
    //             </h1>
    //             <p className='text-center text-[#394d6a] text-xl'>Leading companies use the same courses to help employees keep their skills fresh.</p>
    //             <div className='flex justify-center py-8 md:gap-8'>
    //                 <img src={companyLogo1} />
    //                 <img src={companyLogo2} />
    //                 <img src={companyLogo3} />
    //                 <img src={companyLogo4} />
    //             </div>
    //         </div>
    //     </div>
    // )
    return (
        <div className='w-full bg-[#1A0F2C] py-[50px]'>
            <div className='Wrapper'>
                <div className='Text'>With Great Outcomes.</div>
                <div className='Note'>Our customers have gotten offers from awesome companies.</div>
                <div className='Marquee'>
                    <div className='MarqueeGroup'>
                        {
                            row1.map(el => (
                                <div className='ImageGroup'>
                                    <img className='Image' src={el} />
                                </div>
                            ))
                        }
                    </div>
                    <div className='MarqueeGroup'>
                        {
                            row1.map(el => (
                                <div className='ImageGroup'>
                                    <img className='Image' src={el} />
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className='Marquee'>
                    <div className='MarqueeGroup2'>
                        {
                            row2.map(el => (
                                <div className='ImageGroup'>
                                    <img className='Image' src={el} />
                                </div>
                            ))
                        }
                    </div>
                    <div className='MarqueeGroup2'>
                        {
                            row2.map(el => (
                                <div className='ImageGroup'>
                                    <img className='Image' src={el} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Companies
