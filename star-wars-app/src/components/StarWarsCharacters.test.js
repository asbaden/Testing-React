import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import StarWardsCharacters from "./StarWarsCharacters";
import { getData as mockGetData } from "../api/getData";


jest.mock('../api')

test(`renders the  previos and next buttons`, () => {
    const { getByText } = render(<StarWardsCharacters />);
    
    const previosButton = getByText(/previous/i);
    const nextButton = getByText(/next/i);
    
})





test('api test', async () => {
    const testData = {count:80, next: "nextUrl", previous:"previousUrl", results: [{name:"gus", url: 'url'}]}
       mockGetData.mockResolvedValueOnce(testData);
       const { getByText } = render(<StarWarsCharacters />);
       const nextButton = getByText(/next/i)
       fireEvent.click(nextButton);
   await wait(() => {
       expect(getByText(/gus/i)).toBeTruthy();
       expect(mockGetData).toHaveBeenCalledTimes(2);
   });
});

