const draggable =document.querySelectorAll('.draggable')
const dropable =document.querySelectorAll('.dropable')

draggable.forEach((item)=>{
    item.addEventListener('dragstart', ()=>{
      console.log("drag start")
      item. classList.add('dragging')
      
    })

    // item.addEventListener('draend', ()=>{
    //     console.log('drag end')  
    //     item.classList.remove('dragging') 
    // })
})


dropable.forEach((container)=>{
    container.addEventListener('dragover', (e)=>{
        console.log('drag over')
        e.preventDefault()
        const draggable = document.querySelector('.dragging')
        container.appendChild(draggable)
        
    })
})

 