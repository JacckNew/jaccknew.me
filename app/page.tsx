import { BlogPosts } from 'app/components/posts'

export default function HomePage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hi, I'm Jack (he/him) 👋
      </h1>
      <p className="mb-4">
        {`Welcome to my world! 
        Currently I'm pursuing my Master of Computer Science at the University of St Andrews.
        My MBTI is ENFP. I'm a code enthusiast and design advocate, 
        always finding unrealistic and strange ideas that could be developed. 
        I love to share my thoughts and ideas with others.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
