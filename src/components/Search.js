import { Input, Form, FormGroup, Label} from "reactstrap";
import "./Search.css"

function Search(props)
{
    const {searchCriteria, hSearchCriteria} = props;

    return (
        <Form>
            <FormGroup floating>
                <Input
                    className="text-start"
                  id="SearchInput"
                  name="SearchInput"
                  placeholder="Search"
                  type="text"
                  value={searchCriteria}
                  onChange={hSearchCriteria}
                />
                <Label for="SearchInput">
                  Search
                </Label>
            </FormGroup>
        </Form>
    )
}

export default Search;

