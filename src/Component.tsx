import { OtherComponent } from '@/OtherComponent'

export const Component = () => {
  return (
    <div className="bg-dark-500">
      Component
      <OtherComponent>
        children
      </OtherComponent>
    </div>
  )
}
