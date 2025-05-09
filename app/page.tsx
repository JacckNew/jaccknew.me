import { BlogPosts } from 'app/components/posts'

export default function HomePage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hi, I'm Jack (he/him) 👋
      </h1>
      <p className="mb-4">
        {`Welcome to my personal blog!

        I'm currently a Master's student in Computer Science at the University of St Andrews.

        With a backgound in finance and a passion for technology, I enjoy building creative digital solutions that bridge the gap between design and code.
        
        On this blog, I share insights from my projects, thoughts on tech, and occasional reflections on life. I hope you find something that resonates with you!`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
