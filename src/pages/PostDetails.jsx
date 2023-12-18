import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from '../components/PostAuthor'
import Thumbnail from '../images/blog.jpg'
const PostDetails = () => {
  return (
    <section className='post-details'>
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor/>
          <div className="post-detail__button">
            <Link to={`/posts/werner/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/posts/werner/delete`} className='btn sm danger'>Delete</Link>
          </div>
        </div>
        <h1>This is a post title !</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt=''/>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo eu dolor fringilla dignissim. 
          Nulla facilisi. Quisque ultricies est id risus congue, nec tincidunt augue tristique. Suspendisse potenti. 
          Proin eu ligula eu quam fermentum facilisis. Mauris sit amet varius metus. Fusce bibendum, odio sed ullamcorper 
          eleifend, eros mauris blandit ligula, id ullamcorper purus justo nec urna. Integer vel ex eu sem bibendum cursus. 
          In hac habitasse platea dictumst. Sed euismod, metus a finibus accumsan, odio mi tincidunt orci, 
          nec tincidunt enim turpis vel metus. Duis eu risus vel sem rhoncus fringilla. Nullam nec urna ut metus 
          bibendum varius in sit amet turpis.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo eu dolor fringilla dignissim. 
          Nulla facilisi. Quisque ultricies est id risus congue, nec tincidunt augue tristique. Suspendisse potenti. 
          Proin eu ligula eu quam fermentum facilisis. Mauris sit amet varius metus. Fusce bibendum, odio sed ullamcorper 
          eleifend, eros mauris blandit ligula, id ullamcorper purus justo nec urna. Integer vel ex eu sem bibendum cursus. 
          In hac habitasse platea dictumst. Sed euismod, metus a finibus accumsan, odio mi tincidunt orci, 
          nec tincidunt enim turpis vel metus. Duis eu risus vel sem rhoncus fringilla. Nullam nec urna ut metus 
          bibendum varius in sit amet turpis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit 
          quod expedita voluptatibus porro ex atque necessitatibus placeat, minus accusamus dignissimos 
          delectus quibusdam at cum, eaque, repellendus veniam. Sed facere fuga officia aliquam voluptatum, iste ducimus labore 
          ad earum velit, doloribus odio est mollitia. Quam consectetur, asperiores eius odit, porro in dolore totam natus itaque 
          quaerat voluptatum! Ipsam non blanditiis soluta ducimus, a possimus! Beatae, veritatis consectetur voluptatibus molestiae 
          adipisci voluptates iusto earum? Est quia vero, nisi amet qui dicta quis accusantium rem aut eos, fugiat quidem libero 
          officia explicabo assumenda blanditiis nostrum dolores maxime perferendis commodi dignissimos ea? Provident incidunt 
          ullam eligendi culpa natus. Blanditiis repellat deleniti itaque illum qui doloribus modi aut ex ratione, facere 
          assumenda nobis optio non praesentium? Quidem, voluptas. Exercitationem ut magni sint nesciunt quis maxime cumque 
          possimus, nulla distinctio accusamus repellendus quos officia et. Maxime optio odit nesciunt, sit culpa minima 
          eveniet eius, beatae numquam alias cupiditate cumque suscipit tenetur ipsum fugiat cum tempora adipisci laboriosam 
          accusamus! Quis quibusdam magnam assumenda praesentium delectus recusandae similique natus mollitia ratione quod iste, 
          explicabo sed vel, ab doloribus. Distinctio, repellendus corrupti similique velit, porro veritatis nam, neque optio 
          facilis nisi dolor quia earum magnam ad. Nisi, maxime fugit?
        </p>
      </div>
    </section>
  )
}

export default PostDetails