import ProfileStatusWithHooks from "./ProfileStatusWithHooks"

test("after creation span with status should be displayed", () => {
    const component = create(<ProfileStatusWithHooks status="aboba"/>)
    const instance = component.getInstance()
    let span = instance.findByType("span");
    expect(span.length).toBe(1)
})