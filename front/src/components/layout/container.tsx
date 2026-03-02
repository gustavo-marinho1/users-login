interface Props {
  children: React.ReactNode
}

const Container = ({children}: Props) => {
  return (
    <div className="bg-background rounded-lg border border-border overflow-hidden">
      {children}
    </div>
  )
}

export { Container }