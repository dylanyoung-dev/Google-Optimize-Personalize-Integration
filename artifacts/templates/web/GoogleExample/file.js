// [[ Experience ID | String | ALERT_BAR | {required: true}]]
// Adds a unique variant identifier to CSS when deployed to ensure CSS does not impact styling of other elements.
var compiledCSS = Engage.templating.compile(variant.assets.css)(variant);
var styleTag = document.getElementById('style-' + variant.ref);
if (styleTag) {
    styleTag.innerHTML = compiledCSS;
}
// End Adds a unique variant identifier to CSS when deployed to ensure CSS does not impact styling of other elements.

// make space in the body for the experience
document.body.classList.add("show-TopBanner");
insertHTMLBefore('body', 'pers-');

// GA4 Optimize Integration
gtag('event', 'experience_impression', {
    exp_variant_string: 'SPZ-[[ Experience ID ]]-' + variant.ref;
})

// Declarations
const persButton = document.querySelector("#pers-"+variant.ref+ ' #pers_TopBanner-button');
const persCloseButton = document.querySelector("#pers-"+variant.ref+ ' .pers__btn-close');
const persExperience = document.querySelector("#pers-"+variant.ref+ ' #pers_TopBanner');

// Declare Pers function event
const sendInteractionToPersonalize = function(interactionType){
    const type = "[[ Experience ID ]]_" + interactionType;
    const eventData = {
        "channel": "WEB",
        "pointOfSale": Engage.settings.pointOfSale,
    };
    window.engage.event(type, eventData);
}

//Listen on X button
persCloseButton.addEventListener("click", function(){
    persExperience.style.display = "none";
    document.body.classList.remove("show-TopBanner");
    sendInteractionToPersonalize("DISMISSED")
});

// Listen on CTA button
persButton.onclick = function(){
    sendInteractionToPersonalize("CLICKED")
    location.href = "[[Button Link]]";
};