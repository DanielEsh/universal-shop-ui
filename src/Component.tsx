import { OtherComponent } from '@/OtherComponent'

export const Component = () => {
  return (
    <div className="bg-orange-500">
      Component
      <OtherComponent>
        children
      </OtherComponent>
    </div>
  )
}
