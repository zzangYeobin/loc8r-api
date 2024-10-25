/* GET homepage */
const about = function(req, res){
    res.render('generic-text', {
        title: 'About Loc8r',
        content: 'Loc8r was created to help people find places to sit down \
        and get a bit of work done.<br\><br\>Lorem dolor sit \
        amet, consectetur adipiscing elit. Nunc sed lorem ac nisi digni \
        ssim accumsan. Nullam sit amet interdum magna. Morbi quis \
        faucibus nisi. Vestibulum mollis purus quis eros adipiscing \
        tristique. Proin posuere semper tellus, id placerat augue dapibus \
        ornare. Aenean leo metusm tempus in isl eget, accumsan interdum \
        dui. pellentesque sollicitudin volutpat ullamcorper.'
    });
};

module.exports = {
    about
};