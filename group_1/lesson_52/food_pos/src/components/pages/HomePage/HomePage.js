import { Input } from "../../ui/input/Input";
import BaseTemplate from "../_templates/base/BaseTemplate";

function HomePage() {
  return (
    <BaseTemplate>
      <div className="p-24">
        <div className="row">
          <div className="col-6">
            <h1 className="h2 mb-1">Jaegar Resto</h1>
            <date className="text-white2">{new Date().toLocaleDateString('US-us', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</date>
          </div>
          <div className="col-6">
            <Input placeholder="Search for food, coffe, etc.." className="ml-auto" icon="Home" />
          </div>
        </div>
      </div>
    </BaseTemplate>
  )
}

export default HomePage