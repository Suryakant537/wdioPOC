describe("test the google", function(){
    it("open google and search for keyword", async function(){
        await driver.url("https://www.google.com")
        await $('[name="q"]').setValue("surya");
        await $('(//input[@value="Google Search"])[2]').click();
        await browser.pause(3000);
        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight); // Replace 0, 500 with the desired x, y coordinates
        });
        await driver.pause(5000);
    })
});