import {render} from "@testing-library/react";

const captionTxt = 'Front-end web developer course 2021'
const Component = () => (<table>
    <caption>
      {captionTxt}
    </caption>
    <thead>
    <tr>
      <th scope="col">Person</th>
      <th scope="col">Most interest in</th>
      <th scope="col">Age</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <th scope="row">Chris</th>
      <td>HTML tables</td>
      <td>22</td>
    </tr>
    <tr>
      <th scope="row">Dennis</th>
      <td>Web accessibility</td>
      <td>45</td>
    </tr>
    <tr>
      <th scope="row">Sarah</th>
      <td>JavaScript frameworks</td>
      <td>29</td>
    </tr>
    <tr>
      <th scope="row">Karen</th>
      <td>Web performance</td>
      <td>36</td>
    </tr>
    </tbody>
    <tfoot>
    <tr>
      <th scope="row" colSpan="2">Average age</th>
      <td>33</td>
    </tr>
    </tfoot>
  </table>
)

describe('repro of issue 1289', () => {
  it('should render', () => {
    const {getByText} = render(<Component/>)
    expect(getByText(captionTxt)).toBeInTheDocument()
  });
  it('should get caption', () => {
    const {getByRole} = render(<Component/>)
    expect(getByRole('caption')).toHaveTextContent(captionTxt)
  });
});
