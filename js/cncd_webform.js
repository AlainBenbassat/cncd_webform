jQuery(document).ready(
    function() {
      // check if we have a select which name ends with province-id, and add hook
      jQuery("select[id$='province-id']").change(
          function() {
            // get the name of the selected province
            var selectID = this.id;
            var selectedProvince = jQuery('#' + selectID + ' option:selected').text();

            // find the matching tag label
            var labelContent = "";
            switch (selectedProvince) {
              case "Antwerpen":
                labelContent = "- - - Flandre ";
                break;
              case "Brabant Wallon":
                labelContent = "- - - Brabant Wallon ";
                break;
              case "Brussels":
                labelContent = "- - - Bruxelles ";
                break;
              case "Hainaut":
                labelContent = "- - - Hainaut ";
                break;
              case "Liege":
                labelContent = "- - - Liège ";
                break;
              case "Limburg":
                labelContent = "- - - Flandre ";
                break;
              case "Luxembourg":
                labelContent = "- - - Luxembourg ";
                break;
              case "Namur":
                labelContent = "- - - Namur ";
                break;
              case "Oost-Vlaanderen":
                labelContent = "- - - Flandre ";
                break;
              case "West-Vlaanderen":
                labelContent = "- - - Flandre ";
                break;
              case "Vlaams-Brabant":
                labelContent = "- - - Flandre ";
                break;
            }

            // find the label contains the text
            var checkboxID = jQuery("label:contains('" + labelContent + "')").attr('for');
            if (checkboxID) {
              jQuery('#' + checkboxID).attr("checked", "checked");
            }
          }
      );
    }
);