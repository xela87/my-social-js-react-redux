import React from 'react'
import {act, create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        let root;
        act(() => {
            root = create(<ProfileStatus status="123" />)
        })
        console.log(root.state)
        expect(root.state.status).toBe("123")
    });
});
