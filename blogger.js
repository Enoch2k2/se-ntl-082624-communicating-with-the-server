const blogsBtn = document.getElementById("blogs-btn")
const blogsDiv = document.getElementById("blogs")

blogsBtn.addEventListener('click', async () => {
  const resp = await fetch('http://localhost:3000/blogs')
  const data = await resp.json()

  data.forEach(blog => {
    /* 
    <div>
      <h3>Title</h3>
      <p>content</p>
      <hr>
    </div>
    */

    const div = document.createElement('div')
    const h3 = createTextElement(blog.title, 'h3')
    const p = createTextElement(blog.content, 'p')
    const hr = document.createElement('hr')

    div.appendChild(h3)
    div.appendChild(p)
    div.appendChild(hr)

    blogsDiv.appendChild(div)
  })
})

function createTextElement(text, element) {
  const e = document.createElement(element)
  e.innerText = text
  return e
}