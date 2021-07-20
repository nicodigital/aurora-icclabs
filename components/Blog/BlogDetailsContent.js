import React, { Component } from 'react';
import Link from 'next/link';
import BlogSidebar from './BlogSidebar';

class BlogDetailsContent extends Component {
    render() {
        return (
            <section className="blog-details-area ptb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details">
                                <div className="article-image">
                                    <img src="/images/novedades/feature-image.jpg" alt="image" />
                                </div>

                                <div className="article-content">
                                    <div className="entry-meta mb-5">
                                        <ul>
                                            <li>
                                                <span>Publicado:</span> 
                                                Septiembre 14, 2021
                                            </li>
                                            <li>
                                                <span>Por:</span> 
                                                <Link href="/blog-details/#">
                                                    <a>John Doe</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>Aqui un subtítulo(h2) de la noticia</h2>

                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took.</p>

                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

                                    <p>Equidem impedit officiis quo te. Illud partem sententiae mel eu, euripidis urbanitas et sit. Mediocrem reprimique an vim, veniam tibique omittantur duo ut, agam graeci in vim. Quot appetere patrioque te mea, animal aliquip te pri. Ad vis animal ceteros percipitur, eos tollit civibus percipitur no.</p>

                                    <h3 className="mt-5">Aqui un subtítulo(h3) de la noticia</h3>

                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took.</p>

                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took.</p>

                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                </div>

                                <div className="article-footer d-flex justify-content-center">
                                    
                                    <div className="article-share">
                                        <ul className="social">
                                            <li>
                                                <Link href="/blog-details/#">
                                                    <a target="_blank"><i className="fab fa-facebook-f"></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/blog-details/#">
                                                    <a target="_blank"><i className="fab fa-twitter"></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/blog-details/#">
                                                    <a target="_blank"><i className="fab fa-linkedin-in"></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/blog-details/#">
                                                    <a target="_blank"><i className="fab fa-instagram"></i></a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BlogDetailsContent;