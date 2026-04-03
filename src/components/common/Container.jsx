function Container({ children, className = '' }) {
  return (
    <div
      className={`mx-auto w-full max-w-[1216px] px-[20px] md:px-[30px] lg:px-[12px] ${className}`.trim()}
    >
      {children}
    </div>
  )
}

export default Container
