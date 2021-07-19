import React, { Component } from 'react';
import Link from 'next/link';

class BlogSidebar extends Component {
    render() {
        return (
            <div className="widget-area" id="secondary">
                {/* Search form */}
                <div className="widget widget_search">
                    <form className="search-form">
                        <label>
                            <input type="search" className="search-field" placeholder="Search..." />
                        </label>
                        <button type="submit" className="search-submit">
                            <i className="fas fa-search"></i>
                        </button>
                    </form>
                </div>

                {/* Popular posts */}
                <div className="widget widget_posts_thumb">
                    <h3 className="widget-title">Popular posts</h3>

                    <article className="item">
                        <Link href="/blog-details">
                            <a className="thumb">
                                <span className="fullimage cover bg1" role="img"></span>
                            </a>
                        </Link>
                        <div className="info">
                            <time>March 15, 2020</time>
                            <h4 className="title usmall">
                                <Link href="/blog-details">
                                    <a>The Best Marketing top use Management Tools</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <a href="/blog-details" className="thumb">
                            <span className="fullimage cover bg2" role="img"></span>
                        </a>
                        <div className="info">
                            <time>March 16, 2020</time>
                            <h4 className="title usmall">
                                <Link href="/blog-details">
                                    <a>Top 21 Must-Read Blogs For Creative Agencies</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <a href="/blog-details" className="thumb">
                            <span className="fullimage cover bg3" role="img"></span>
                        </a>
                        <div className="info">
                            <time>March 17, 2020</time>
                            <h4 className="title usmall">
                                <Link href="/blog-details">
                                    <a>Protect your workplace from cyber attacks</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>
                </div>

                {/* Recent posts */}
                <div className="widget widget_recent_entries">
                    <h3 className="widget-title">Recent posts</h3>

                    <ul>
                        <li>
                            <Link href="/blog-details">
                                <a>The security risks of changing package owners</a>
                            </Link>
                            <span className="post-date">March 15, 2020</span>
                        </li>
                        <li>
                            <Link href="/blog-details">
                                <a>Tips to protecting business and Family</a>
                            </Link>
                            <span className="post-date">March 16, 2020</span>
                        </li>
                        <li>
                            <Link href="/blog-details">
                                <a>Protect your workplace from cyber attacks</a>
                            </Link>
                            <span className="post-date">March 17, 2020</span>
                        </li>
                        <li>
                            <Link href="/blog-details">
                                <a>Business debit Fees to increase in 2020</a>
                            </Link>
                            <span className="post-date">March 18, 2020</span>
                        </li>
                        <li>
                            <Link href="/blog-details">
                                <a>10 tips to reduce your card processing costs</a>
                            </Link>
                            <span className="post-date">March 19, 2020</span>
                        </li>
                    </ul>
                </div>

                {/* Categories */}
                <div className="widget widget_categories">
                    <h3 className="widget-title">Categories</h3>

                    <ul>
                        <li>
                            <Link href="/blog2/#">
                                <a>Business</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog2/#">
                                <a>Privacy</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog2/#">
                                <a>Technology </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog2/#">
                                <a>Tips</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog2/#">
                                <a>Uncategorized</a>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Tags */}
                <div className="widget widget_tag_cloud">
                    <h3 className="widget-title">Tags</h3>

                    <div className="tagcloud">
                        <Link href="/blog2/#">
                            <a>IT <span className="tag-link-count">(3)</span></a>
                        </Link>
                        <Link href="/blog2/#">
                            <a>React <span className="tag-link-count">(3)</span></a>
                        </Link>
                        <Link href="/blog2/#">
                            <a>Games <span className="tag-link-count">(2)</span></a>
                        </Link>
                        <Link href="/blog2/#">
                            <a>Development <span className="tag-link-count">(2)</span></a>
                        </Link>
                        <Link href="/blog2/#">
                            <a>Design <span className="tag-link-count">(1)</span></a>
                        </Link>
                        <Link href="/blog2/#">
                            <a>Apps <span className="tag-link-count">(1)</span></a>
                        </Link>
                        <Link href="/blog2/#">
                            <a>Marketing <span className="tag-link-count">(1)</span></a>
                        </Link>
                        <Link href="/blog2/#">
                            <a>Tips <span className="tag-link-count">(2)</span></a>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogSidebar;