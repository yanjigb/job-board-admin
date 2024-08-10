import { FC, Fragment } from 'react';
// import Pageheader from '../../../../components/common/pageheader/pageheader';
import { Link } from 'react-router-dom';
import media70 from "../../../../assets/images/media/media-70.jpg";
import media71 from "../../../../assets/images/media/media-71.jpg";
import media72 from "../../../../assets/images/media/media-72.jpg";
import media36 from "../../../../assets/images/media/media-36.jpg";
import media31 from "../../../../assets/images/media/media-31.jpg";
import media26 from "../../../../assets/images/media/media-26.jpg";
import media35 from "../../../../assets/images/media/media-35.jpg";
import media39 from "../../../../assets/images/media/media-39.jpg";
import media52 from "../../../../assets/images/media/media-52.jpg";
import media54 from "../../../../assets/images/media/media-54.jpg";
import media56 from "../../../../assets/images/media/media-56.jpg";
import face15 from "../../../../assets/images/faces/15.jpg";
import face10 from "../../../../assets/images/faces/10.jpg";
import face11 from "../../../../assets/images/faces/11.jpg";
import face3 from "../../../../assets/images/faces/3.jpg";

import face5 from "../../../../assets/images/faces/5.jpg";
import face4 from "../../../../assets/images/faces/4.jpg";
import { Populartopics, Populartopics1 } from './blogdata';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';


// import required modules
import { Autoplay, EffectFade } from 'swiper/modules';


interface BlogProps { }

const Blog: FC<BlogProps> = () => {
    return (
        <Fragment>
            <div className="container my-[3rem] ">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-6 xl:col-span-12 col-span-12">
                        <div className="box overflow-hidden">
                            <div className="box-body !p-0">
                                <Swiper
                                    autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                    spaceBetween={30}
                                    effect={'fade'}
                                    modules={[EffectFade, Autoplay]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <div className="rtl:dir-rtl">
                                            <Link to="#">
                                                <img src={media70} className="block-full" alt="..." />
                                                <div className="blog-caption text-start">
                                                    <p className="mb-2 text-xs">The agency has a diverse workforce of just under 18,000 civil servants, and works with many more U.S.</p>
                                                    <h6 className="text-base font-semibold mb-2">N.A.S.A</h6>
                                                    <div className="flex items-center">
                                                        <img src={face15} alt="" className="shadow-none ring-transparent avatar avatar-sm !rounded-full me-2" />
                                                        <div className="font-semibold">Json Taylor - <span className="text-[.6875rem] opacity-70 font-normal">12,Dec 2022 - 04:34PM</span></div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="rtl:dir-rtl">
                                            <Link to="#">
                                                <img src={media71} className="block-full" alt="..." />
                                                <div className="blog-caption text-start">
                                                    <p className="mb-2 text-xs">NASA is committed to providing all categories of businesses in both NASA prime contracts and subcontracts.</p>
                                                    <h6 className="text-base font-semibold mb-2">NASA Businesses</h6>
                                                    <div className="flex items-center">
                                                        <img src={face15} alt="" className="shadow-none ring-transparent avatar avatar-sm !rounded-full me-2" />
                                                        <div className="font-semibold">Elisha Keens - <span className="text-[.6875rem] opacity-70 font-normal">23,Dec 2022 - 11:27AM</span></div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="rtl:dir-rtl">
                                            <Link to="#">
                                                <img src={media72} className="block-full" alt="..." />
                                                <div className="blog-caption text-start">
                                                    <p className="mb-2 text-xs">NASA Nelson served in the U.S. Senate for 18 years from Florida space shuttle mission 61-C in 1986.</p>
                                                    <h6 className="text-base font-semibold mb-2">NASA Leadership</h6>
                                                    <div className="flex items-center">
                                                        <img src={face4} alt="" className="shadow-none ring-transparent avatar avatar-sm !rounded-full me-2" />
                                                        <div className="font-semibold">Melissa Blue - <span className="text-[.6875rem] opacity-70 font-normal">16,Dec 2022 - 9:45AM</span></div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>

                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-6 xl:col-span-12 col-span-12">
                        <div className="grid grid-cols-12 gap-x-6">
                            <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                                <div className="box">
                                    <Link to="#">
                                        <img src={media36} className="card-img-top rounded-t-sm" alt="..." />
                                    </Link>
                                    <div className="box-body">
                                        <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`} className="font-semibold text-[0.875rem] text-dark mb-1">Touring excites in winter !</Link>
                                        <p className="card-text text-[#8c9097] dark:text-white/50 mb-3">The holographic principle, theorized to be a property of quantum gravity, postulates that the description.</p>
                                        <Link to="#" className="ti-btn ti-btn-primary !font-medium !mb-0">Read More</Link>
                                    </div>
                                    <div className="box-footer">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="avatar avatar-sm avatar-rounded me-2">
                                                    <img src={face10} alt="" />
                                                </div>
                                                <div>
                                                    <p className="mb-0 font-semibold">Justin Kim</p>
                                                    <p className="text-[#8c9097] dark:text-white/50 text-[.625rem] mb-0">20,Dec 2022 - 16:32</p>
                                                </div>
                                            </div>
                                            <div>
                                                <button aria-label="button" type="button" className="ti-btn ti-btn-light ti-btn-sm !me-[0.375rem]"><i className="ri-thumb-up-line"></i></button>
                                                <button aria-label="button" type="button" className="ti-btn ti-btn-light ti-btn-sm"><i className="ri-chat-2-line"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                                <div className="box">
                                    <Link to="#">
                                        <img src={media35} className="card-img-top rounded-t-sm" alt="..." />
                                    </Link>
                                    <div className="box-body">
                                        <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`} className="font-semibold text-[0.875rem] text-dark mb-1"> Boat manufacutrers are in debt !</Link>
                                        <p className="card-text text-[#8c9097] dark:text-white/50 mb-3">when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        <Link to="#" className="ti-btn ti-btn-primary !font-medium !mb-0">Read More</Link>
                                    </div>
                                    <div className="box-footer">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="avatar avatar-sm avatar-rounded me-2">
                                                    <img src={face5} alt="" />
                                                </div>
                                                <div>
                                                    <p className="mb-0 font-semibold">Monika Karen</p>
                                                    <p className="text-[#8c9097] dark:text-white/50 text-[.625rem] mb-0">25,Dec 2022 - 12:45</p>
                                                </div>
                                            </div>
                                            <div>
                                                <button aria-label="button" type="button" className="ti-btn ti-btn-light ti-btn-sm !me-[0.375rem]"><i className="ri-thumb-up-line"></i></button>
                                                <button aria-label="button" type="button" className="ti-btn ti-btn-light ti-btn-sm"><i className="ri-chat-2-line"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-12 col-span-12">
                        <div className="flex justify-between items-center mb-3">
                            <h5 className="mb-0 font-semibold text-[1.25rem] text-defaulttextcolor">Popular Topics</h5>
                            <p className="mb-0 font-semibold">
                                <Link to="#" className="text-primary"><u>View All</u></Link>
                            </p>
                        </div>
                        <div className="grid grid-cols-12 gap-x-6">
                            {Populartopics.map((idx) => (
                                <div className="xxl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-4 col-span-6" key={Math.random()}>
                                    <Link to="#">
                                        <div className="box !bg-black/20 overlay-card text-white">
                                            <img src={idx.src} className="card-img" alt="..." />
                                            <div className="card-img-overlay flex flex-column p-0 over-content-bottom">
                                                <div className="box-footer border-t-0">
                                                    <h6 className="font-semibold mb-0 text-white text-[1rem]">{idx.text}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="xl:col-span-12 col-span-12">
                        <div className="grid grid-cols-12 gap-x-6">
                            <div className="xl:col-span-6 xxl:col-span-8 col-span-12">
                                <div className="grid grid-cols-12 gap-x-6">
                                    <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                                        <div className="box">
                                            <Link to="#">
                                                <img src={media26} className="card-img-top rounded-t-sm" alt="..." />
                                            </Link>
                                            <div className="box-body">
                                                <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`} className="font-semibold text-[0.875rem] text-dark mb-1">Features of new car !</Link>
                                                <p className="card-text text-[#8c9097] dark:text-white/50 mb-3">The holographic principle, theorized to be a property of quantum gravity, postulates that the description.</p>
                                                <Link to="#" className="ti-btn ti-btn-primary !font-medium !mb-0">Read More</Link>
                                            </div>
                                            <div className="box-footer">
                                                <div className="flex flex-wrap items-center justify-between">
                                                    <div className="flex items-center">
                                                        <div className="avatar avatar-sm avatar-rounded me-2">
                                                            <img src={face11} alt="" />
                                                        </div>
                                                        <div>
                                                            <p className="mb-0 font-semibold">Alister Chuk</p>
                                                            <p className="text-[#8c9097] dark:text-white/50 text-[.625rem] mb-0">18,Dec 2022 - 12:25</p>
                                                        </div>
                                                    </div>
                                                    <div className="btn-list">
                                                        <button aria-label="button" type="button" className="ti-btn ti-btn-light ti-btn-sm !me-[0.375rem]"><i className="ri-thumb-up-line"></i></button>
                                                        <button aria-label="button" type="button" className="ti-btn ti-btn-light ti-btn-sm"><i className="ri-chat-2-line"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                                        <div className="box">
                                            <Link to="#">
                                                <img src={media31} className="card-img-top rounded-t-sm" alt="..." />
                                            </Link>
                                            <div className="box-body">
                                                <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`} className="font-semibold text-[0.875rem] text-dark mb-1">Beautiful beach on a sunny day !</Link>
                                                <p className="card-text text-[#8c9097] dark:text-white/50 mb-3">The holographic principle, theorized to be a property of quantum gravity, postulates that the description.</p>
                                                <Link to="#" className="ti-btn ti-btn-primary !font-medium !mb-0">Read More</Link>
                                            </div>
                                            <div className="box-footer">
                                                <div className="flex flex-wrap items-center justify-between">
                                                    <div className="flex items-center">
                                                        <div className="avatar avatar-sm avatar-rounded me-2">
                                                            <img src={face3} alt="" />
                                                        </div>
                                                        <div>
                                                            <p className="mb-0 font-semibold">Samantha Nans</p>
                                                            <p className="text-[#8c9097] dark:text-white/50 text-[.625rem] mb-0">25,Dec 2022 - 04:25</p>
                                                        </div>
                                                    </div>
                                                    <div className="btn-list">
                                                        <button aria-label="button" type="button" className="ti-btn ti-btn-light ti-btn-sm !me-[0.375rem]"><i className="ri-thumb-up-line"></i></button>
                                                        <button aria-label="button" type="button" className="ti-btn ti-btn-light ti-btn-sm"><i className="ri-chat-2-line"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:col-span-6 xxl:col-span-4 col-span-12">
                                <div className="box">
                                    <div className="box-header flex items-center justify-between">
                                        <div className="box-title">
                                            Featured Blogs
                                        </div>
                                        <div>
                                            <span className="badge bg-primary/10 text-primary">32 Blogs</span>
                                        </div>
                                    </div>
                                    <div className="box-body">
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                <div className="flex flex-wrap items-center">
                                                    <span className="avatar avatar-xl me-4">
                                                        <img src={media39} className="img-fluid !rounded-md" alt="..." />
                                                    </span>
                                                    <div className="flex-grow">
                                                        <Link to="#" className="text-[0.875rem] font-semibold mb-0">Samantha Jack</Link>
                                                        <p className="mb-1 popular-blog-content text-truncate">
                                                            There are many variations of passages of Lorem Ipsum available
                                                        </p>
                                                        <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem]">24,Nov 2022 - 18:27</span>
                                                    </div>
                                                    <div>
                                                        <button type="button" aria-label="button" className="ti-btn ti-btn-light ti-btn-sm rtl:rotate-180"><i className="ri-arrow-right-s-line"></i></button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="flex flex-wrap items-center">
                                                    <span className="avatar avatar-xl me-4">
                                                        <img src={media56} className="img-fluid !rounded-md" alt="..." />
                                                    </span>
                                                    <div className="flex-grow">
                                                        <Link to="#" className="text-[0.875rem] font-semibold mb-0">Kirsten Sam</Link>
                                                        <p className="mb-1 popular-blog-content text-truncate">
                                                            Latin words, combined with a handful of model sentence
                                                        </p>
                                                        <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem]">28,Nov 2022 - 10:45</span>
                                                    </div>
                                                    <div>
                                                        <button aria-label="button" type="button" className="ti-btn ti-btn-light ti-btn-sm rtl:rotate-180"><i className="ri-arrow-right-s-line"></i></button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="flex flex-wrap items-center">
                                                    <span className="avatar avatar-xl me-4">
                                                        <img src={media54} className="img-fluid !rounded-md" alt="..." />
                                                    </span>
                                                    <div className="flex-grow">
                                                        <Link to="#" className="text-[0.875rem] font-semibold mb-0">Jessica Karon</Link>
                                                        <p className="mb-1 popular-blog-content text-truncate">
                                                            Contrary to popular belief, Lorem Ipsum is not simply random
                                                        </p>
                                                        <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem]">30,Nov 2022 - 08:32</span>
                                                    </div>
                                                    <div>
                                                        <button type="button" aria-label="button" className="ti-btn ti-btn-light ti-btn-sm rtl:rotate-180"><i className="ri-arrow-right-s-line"></i></button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="flex flex-wrap items-center">
                                                    <span className="avatar avatar-xl me-4">
                                                        <img src={media52} className="img-fluid !rounded-md" alt="..." />
                                                    </span>
                                                    <div className="flex-grow">
                                                        <Link to="#" className="text-[0.875rem] font-semibold mb-0">Broad Stuart</Link>
                                                        <p className="mb-1 popular-blog-content text-truncate">
                                                            It was popularised in the 1960s with the release of Letraset sheets containing
                                                        </p>
                                                        <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem]">3,Dec 2022 - 12:56</span>
                                                    </div>
                                                    <div>
                                                        <button type="button" aria-label="button" className="ti-btn ti-btn-light ti-btn-sm rtl:rotate-180"><i className="ri-arrow-right-s-line"></i></button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item text-center">
                                                <button type="button" className="ti-btn ti-btn-primary !font-medium !mb-0">Load more</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-12 col-span-12">
                        <div className="grid grid-cols-12 gap-x-6">
                            {Populartopics1.map((idx) => (
                                <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12" key={Math.random()}>
                                    <div className="box">
                                        <Link to="#">
                                            <img src={idx.src1} className="card-img-top rounded-t-sm" alt="..." />
                                        </Link>
                                        <div className="box-body">
                                            <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`} className="font-semibold text-[0.875rem] text-dark mb-1">{idx.title}</Link>
                                            <p className="card-text text-[#8c9097] dark:text-white/50 mb-4">{idx.text}</p>
                                            <Link to="#" className="ti-btn ti-btn-primary !font-medium !mb-0">Read More</Link>
                                        </div>
                                        <div className="box-footer">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <div className="avatar avatar-sm avatar-rounded me-2">
                                                        <img src={idx.src2} alt="" />
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 font-semibold">{idx.name}</p>
                                                        <p className="text-[#8c9097] dark:text-white/50 text-[.625rem] mb-0">{idx.time}</p>
                                                    </div>
                                                </div>
                                                <div className="btn-list">
                                                    <button aria-label="button" type="button" className="ti-btn ti-btn-light ti-btn-sm !me-[0.375rem]"><i className="ri-thumb-up-line"></i></button>
                                                    <button aria-label="button" type="button" className="ti-btn ti-btn-light ti-btn-sm"><i className="ri-chat-2-line"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="ltr:float-right rtl:float-left mb-6">
                    <nav aria-label="Page navigation" className="">
                        <ul className="pagination mb-0 flex flex-row rounded-sm text-[1rem]">
                            <li className="page-item disabled">
                                <Link className="page-link !py-[0.375rem] !px-[0.75rem]" to="#">
                                    Prev
                                </Link>
                            </li>
                            <li className="page-item active"><Link className="page-link !py-[0.375rem] !px-[0.75rem]" to="#">1</Link></li>
                            <li className="page-item "><Link className="page-link !py-[0.375rem] !px-[0.75rem]" to="#">2</Link></li>
                            <li className="page-item ">
                                <Link aria-label="anchor" className="page-link !py-[0.375rem] !px-[0.75rem]" to="#">
                                    <i className="bi bi-three-dots"></i>
                                </Link>
                            </li>
                            <li className="page-item "><Link className="page-link !py-[0.375rem] !px-[0.75rem]" to="#">17</Link></li>
                            <li className="page-item">
                                <Link className="page-link !text-primary !py-[0.375rem] !px-[0.75rem]" to="#">
                                    next
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </Fragment>
    );
}

export default Blog;
