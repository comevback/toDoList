 // 在JavaScript中监听删除按钮的点击事件
const deleteButtons = document.querySelectorAll('.delete');
deleteButtons.forEach(button => {
    button.addEventListener('click', () => {
        const index = button.getAttribute('data-index');
        
        // 确定要发送删除请求的路由路径
        let deleteRoute = '';
        if (window.location.pathname === '/') {
            deleteRoute = `/delete/${index}`; // 根页面的路由路径
        } else if (window.location.pathname === '/work') {
            deleteRoute = `/work/delete/${index}`; // 工作页面的路由路径
        }

        // 发送删除请求到相应的路由
        fetch(deleteRoute, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // 删除成功，根据当前页面更新视图
                if (window.location.pathname === '/') {
                    // 更新根页面视图
                } else if (window.location.pathname === '/work') {
                    // 更新工作页面视图
                }
            } else {
                // 删除失败，处理错误，如果需要的话
            }
        })
        .catch(error => {
            // 处理错误，如果有的话
        });
    });
});


document.querySelectorAll(".checkbox").forEach(button =>{
    button.addEventListener('click', ()=>{
        const pElement = button.nextElementSibling;
        // 切换<p>元素的"finished"类
        pElement.classList.toggle("finished");
    })
})