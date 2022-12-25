import { ExplanationTextType } from 'src/types/types'

const ExplanationText: React.FC<ExplanationTextType> = (ExplanationProps: ExplanationTextType) => {
  return (
    <>
      <p>{ExplanationProps.name}</p>
      <p>{ExplanationProps.first}</p>
      <p>{ExplanationProps.second}</p>
      <p>{ExplanationProps.third}</p>
    </>
  )
}

export default ExplanationText
