mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn input_greeting(name: &str) {
    alert(&format!("Hello, {}", name));
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, BrisReact!");
}

#[wasm_bindgen]
pub fn fibonacci(n: u32) -> u32 {
    match n {
        0 => 1,
        1 => 1,
        _ => fibonacci(n - 1) + fibonacci(n - 2),
    }
}

#[wasm_bindgen]
pub struct Foo {
    internal: i32,
}

#[wasm_bindgen]
impl Foo {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Foo {
        Foo { internal: 0 }
    }

    pub fn get(&self) -> i32 {
        self.internal
    }

    pub fn set(&mut self, val: i32) {
        self.internal = val;
    }

    pub fn alert_current_internal_value(&self) {
        alert(&format!("The current internal value is {}", self.internal));
    }
}

// The entrypoint to our function that runs before React loads.
#[wasm_bindgen(start)]
pub fn main() -> Result<(), JsValue> {
    let window = web_sys::window().expect("No global window object exists.");
    let document = window.document().expect("Should have a document on window.");
    let body = document.body().expect("Document should have a body.");

    let val = document.create_element("p")?;
    val.set_inner_html("Hello from Rust and WebAssembly");

    body.append_child(&val)?;

    Ok(())
}