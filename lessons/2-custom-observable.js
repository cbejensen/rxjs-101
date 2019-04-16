const customSource = () => ({
  subscribe: (next, err, complete) => {
    next('custom observable')
  }
})

customSource().subscribe(console.log)
