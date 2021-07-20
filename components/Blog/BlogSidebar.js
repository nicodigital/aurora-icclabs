import React, { Component } from 'react';
import Link from 'next/link';

class BlogSidebar extends Component {
    render() {
        return (
            <div className="widget-area" id="secondary">

                {/* Popular posts */}
                <div className="widget widget_posts_thumb">
                    <h3 className="widget-title">Noticias populares</h3>

                    <article className="item">
                        <Link href="/articulo">
                            <a className="thumb">
                                <img src="/images/novedades/thumb-small.jpg" alt="image" />
                            </a>
                        </Link>
                        <div className="info">
                            <time>Septiembre 15, 2021</time>
                            <h4 className="title usmall">
                                <Link href="/articulo">
                                    <a>Título largo de la noticia con aproximadamente diez palabras</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link href="/articulo">
                            <a className="thumb">
                                <img src="/images/novedades/thumb-small.jpg" alt="image" />
                            </a>
                        </Link>
                        <div className="info">
                            <time>Septiembre 15, 2021</time>
                            <h4 className="title usmall">
                                <Link href="/articulo">
                                    <a>Título largo de la noticia con aproximadamente diez palabras</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link href="/articulo">
                            <a className="thumb">
                                <img src="/images/novedades/thumb-small.jpg" alt="image" />
                            </a>
                        </Link>
                        <div className="info">
                            <time>Septiembre 15, 2021</time>
                            <h4 className="title usmall">
                                <Link href="/articulo">
                                    <a>Título largo de la noticia con aproximadamente diez palabras</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>
                </div>

                {/* Recent posts */}
                <div className="widget widget_recent_entries">
                    <h3 className="widget-title">Publicaciones recientes</h3>

                    <ul>
                        <li>
                            <Link href="/articulo">
                                <a>Título largo de la noticia con aproximadamente diez palabras</a>
                            </Link>
                            <span className="post-date">March 15, 2020</span>
                        </li>
                        <li>
                            <Link href="/articulo">
                                <a>Título largo de la noticia con aproximadamente diez palabras</a>
                            </Link>
                            <span className="post-date">March 16, 2020</span>
                        </li>
                        <li>
                            <Link href="/articulo">
                                <a>Título largo de la noticia con aproximadamente diez palabras</a>
                            </Link>
                            <span className="post-date">March 17, 2020</span>
                        </li>
                        <li>
                            <Link href="/articulo">
                                <a>Título largo de la noticia con aproximadamente diez palabras</a>
                            </Link>
                            <span className="post-date">March 18, 2020</span>
                        </li>
                        <li>
                            <Link href="/articulo">
                                <a>Título largo de la noticia con aproximadamente diez palabras</a>
                            </Link>
                            <span className="post-date">March 19, 2020</span>
                        </li>
                    </ul>
                </div>

                {/* Categories */}
                <div className="widget widget_categories">
                    <h3 className="widget-title">Categorías</h3>

                    <ul>
                        <li>
                            <Link href="/blog2/#">
                                <a>Sustentabilidad</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog2/#">
                                <a>Tecnología</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog2/#">
                                <a>Eventos </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog2/#">
                                <a>Tips</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default BlogSidebar;