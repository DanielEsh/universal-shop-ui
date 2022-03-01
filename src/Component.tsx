import { OtherComponent } from '@/OtherComponent'

export const Component = () => {
  return (
    <div className="bg-primary-500">
      Component
      <OtherComponent>
        children
      </OtherComponent>
    </div>
  )
}
