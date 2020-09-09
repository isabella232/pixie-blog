import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import styles from './blog-post-item.module.scss';
import PostPlaceholder from '../../post-placeholder';
import GravatarIcon from '../../gravatar';

const BlogPostItem = ({ post }) => {
  const {
    frontmatter: {
      title,
      featured_image: featuredImage,
      author,
      email,
      date,
      category,
    },
    excerpt,
    fields: { slug },
  } = post;
  return (
    <article className='row'>
      <Link to={`/blog/${slug}`}>
        <div className='col-2' />
        <div className='col-8'>
          <div className={styles.border}>
            {featuredImage
              ? <Img fluid={featuredImage.childImageSharp.fluid} alt={title} />
              : <PostPlaceholder />}
            <div className={styles.body}>
              <div className={styles.heading}>
                <div className={styles.authorAvatar}>
                  <GravatarIcon email={email} />
                </div>
                <div className={styles.authorDetails}>
                  <div className={styles.authorRow}>
                    {author}
                    {' '}
                    in
                    {' '}
                    {category}
                  </div>
                  <div className={styles.dateRow}>
                    {date}
                  </div>
                </div>
              </div>
              <h3>{title}</h3>
              <p>{excerpt}</p>
              <div className='col-2' />
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};
BlogPostItem.propTypes = {
  post: PropTypes.shape({
    frontmatter: PropTypes.object,
    fields: PropTypes.object,
    timeToRead: PropTypes.number,
    excerpt: PropTypes.string,
  }).isRequired,
};

export default BlogPostItem;
